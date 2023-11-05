import * as SecureStore from "expo-secure-store";

export const API_URL = "http://192.168.1.9:8000/api/v1/";
const JWT_KEY = "my-jwt";

export async function storeGetJWT() {
	await SecureStore.getItemAsync(JWT_KEY);
}

export async function storeSetJWT(data) {
	await SecureStore.setItemAsync(JWT_KEY, data);
}

export async function storeDeleteJWT() {
	await SecureStore.deleteItemAsync(JWT_KEY);
}
