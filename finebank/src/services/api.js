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
		alert(err, "in get accounts");
	}
}

// Geting user
export async function getUser(user_type) {
	try {
		const response = await axiosInstance.get(`${user_type}-people/`);
		return response.data[0];
	} catch (err) {
		alert(err, "in get user");
	}
}

// Geting user
export async function getCards(account) {
	try {
		const response = await axiosInstance.get(`cards/?account=${account}`);
		return response.data;
	} catch (err) {
		alert(err, "in get cards");
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
		alert(err, "in get statements");
	}
}
