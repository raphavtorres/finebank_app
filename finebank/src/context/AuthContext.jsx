import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";
import * as SecureStore from "expo-secure-store";

const JWT_KEY = "my-jwt";
export const API_URL = "http://192.168.1.9:8000/api/v1/";

export const axiosInstance = axios.create({
	baseURL: API_URL,
});

const AuthContext = createContext({});

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [authState, setAuthState] = useState({
		jwt: null,
		authenticated: false,
	});

	useEffect(() => {
		async function loadJWT() {
			const jwt = await SecureStore.getItemAsync(JWT_KEY);
			console.log("stored: ", jwt);

			if (jwt) {
				axiosInstance.defaults.headers.common[
					"Authorization"
				] = `Bearer ${jwt}`;

				setAuthState({
					jwt: jwt,
					authenticated: true,
				});
			}
		}
		loadJWT();
	}, []);

	// REGISTER
	async function register(register_number, password) {
		try {
			return await axiosInstance.post("auth/jwt/create/", {
				register_number: parseInt(register_number),
				password: password,
			});
		} catch (e) {
			return { error: true, msg: e.response.data.msg };
		}
	}

	// LOGIN
	async function login(register_number, password) {
		try {
			const response = await axiosInstance.post("auth/jwt/create/", {
				register_number: parseInt(register_number),
				password: password,
			});

			setAuthState({
				jwt: response.data.access,
				authenticated: true,
			});

			axiosInstance.defaults.headers.common[
				"Authorization"
			] = `Bearer ${response.data.access}`;

			await SecureStore.setItemAsync(JWT_KEY, response.data.access);

			return response.data;
		} catch (err) {
			// handleErrors(err, {
			// 	badRequest: "Faltando CPF/CNPJ ou senha",
			// 	unauthorized: "Login inválido",
			// 	rest: "Login falhou",
			// });
			return { error: true, msg: err.response.data.msg };
		}
	}

	async function logout() {
		// Delete JWT from storage
		await SecureStore.deleteItemAsync(JWT_KEY);

		// Update HTTP Headers
		axiosInstance.defaults.headers.common["Authorization"] = "";

		// Reset auth state
		setAuthState({
			jwt: null,
			authenticated: false,
		});
	}

	const value = {
		onRegister: register,
		onLogin: login,
		onLogout: logout,
		authState,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
