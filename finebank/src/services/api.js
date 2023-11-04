import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "http://192.168.1.9:8000/api/v1/",
});

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

// Login - creating JWT
export default async function login(register_number, pass) {
	try {
		const response = await axiosInstance.post("auth/jwt/create/", {
			register_number: parseInt(register_number),
			password: pass,
		});

		showSuccessMsg("Login com sucesso");

		return response.data;
	} catch (err) {
		handleErrors(err, {
			badRequest: "Faltando CPF/CNPJ ou senha",
			unauthorized: "Login inválido",
			rest: "Login falhou",
		});
	}
}

// Verifying JWT
export async function verifyJWT(token) {
	try {
		const response = await axiosInstance.post("auth/jwt/verify/", {
			token: token,
		});

		if (response.status == 200) {
			return true;
		}
	} catch (err) {
		return false;
	}
}
