import { createContext, useContext, useEffect, useState } from "react";

import { axiosInstance } from "../services/api";
import {
	API_URL,
	storeSet,
	storeGet,
	storeDelete,
	JWT_KEY,
	USER_JSON,
	USER_TYPE,
	ACCOUNT_JSON,
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
			const jwt = await storeGet(JWT_KEY);

			// validating jwt
			if (jwt) {
				try {
					await axiosInstance.post("auth/jwt/verify/", {
						token: jwt,
					});

					axiosInstance.defaults.headers.common[
						"Authorization"
					] = `Bearer ${jwt}`;

					setAuthState({
						jwt: jwt,
						authenticated: true,
					});
				} catch (e) {
					await logout();
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

			await storeSet(JWT_KEY, response.data.access);
			return response.data;
		} catch (err) {
			return { error: true, msg: err.response.data.msg };
		}
	}

	async function logout() {
		// Delete all from storage
		await storeDelete(JWT_KEY);
		await storeDelete(USER_JSON);
		await storeDelete(USER_TYPE);
		await storeDelete(ACCOUNT_JSON);

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
