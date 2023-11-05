import { createContext, useContext, useEffect, useState } from "react";

import { axiosInstance } from "../services/api";
import {
	storeSetJWT,
	storeGetJWT,
	storeDeleteJWT,
} from "../constant/apiConstant";

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
			// getting jwt from secure store
			const jwt = await storeGetJWT();
			// console.log("stored: ", jwt);

			// validating jwt
			if (jwt) {
				const isJWTValid = await axiosInstance.post("auth/jwt/verify/", {
					token: jwt,
				});

				if (isJWTValid) {
					axiosInstance.defaults.headers.common[
						"Authorization"
					] = `Bearer ${jwt}`;

					setAuthState({
						jwt: jwt,
						authenticated: true,
					});
				} else {
					logout();
				}
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

			// setAuthState({
			// 	jwt: response.data.access,
			// 	authenticated: true,
			// });

			axiosInstance.defaults.headers.common[
				"Authorization"
			] = `Bearer ${response.data.access}`;

			await storeSetJWT(response.data.access);

			return response.data;
		} catch (err) {
			return { error: true, msg: err.response.data.msg };
		}
	}

	async function logout() {
		// Delete JWT from storage
		await storeDeleteJWT();

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
		setAuthState,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
