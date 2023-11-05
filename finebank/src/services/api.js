import axios from "axios";
import { API_URL } from "../constant/apiConstant";

export const axiosInstance = axios.create({
	baseURL: API_URL,
});

export async function getAccounts() {
	try {
		const response = await axiosInstance.get("accounts/");

		return response.data;
	} catch (err) {
		console.log(err);
	}
}

// ERRORS WARNING
function handleErrors(error, errorMsg = "") {
	let textError = "";

	if (!error.response.status) {
		textError = "Sem resposta do servidor";
	} else if (error.response.status === 400) {
		textError = errorMsg.badRequest;
	} else if (error.response.status === 401) {
		textError = "Não autorizado";
	} else {
		textError = errorMsg.rest;
	}
}

// // Verifying JWT
// export async function verifyJWT(token) {
// 	try {
// 		const response = await axiosInstance.post("auth/jwt/verify/", {
// 			token: token,
// 		});

// 		if (response.status == 200) {
// 			return true;
// 		}
// 	} catch (err) {
// 		return false;
// 	}
// }
