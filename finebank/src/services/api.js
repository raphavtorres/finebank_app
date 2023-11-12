import axios from "axios";
import { API_URL } from "../constant/apiConstant";

export const axiosInstance = axios.create({
	baseURL: API_URL,
});

// Geting accounts
export async function getAccounts() {
	try {
		const response = await axiosInstance.get("accounts/");

		return response.data;
	} catch (err) {
		console.log(err);
	}
}

// Geting user
export async function getUser(user_type) {
	try {
		const response = await axiosInstance.get(`${user_type}-people/`);
		return response.data[0];
	} catch (err) {
		alert("ERRO USER");
	}
}

// Geting user
export async function getCards(account) {
	console.log("ACCOUNT FUNCTION", account);
	try {
		const response = await axiosInstance.get(`cards/?account=${account}`);
		console.log("GET CARDS", response.data);
		return response.data;
	} catch (err) {
		alert("ERRO CARDS");
		// alert(err, "ERRO CARDS");
	}
}

// Getting statement
export async function getStatements(account) {
	try {
		const response = await axiosInstance.get(
			`bank-statement/?account=${account}`
		);
		return response.data;
	} catch (err) {
		alert("ERRO STATEMENT");
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
