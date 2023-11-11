import * as SecureStore from "expo-secure-store";

export const API_URL = "http://192.168.1.10:8000/api/v1/";
export const JWT_KEY = "my-jwt";
export const USER_JSON = "user-json";
export const USER_TYPE = "user-type";
export const ACCOUNT_JSON = "account-json";

export async function storeGet(item) {
	return await SecureStore.getItemAsync(item);
}

export async function storeSet(item, data) {
	await SecureStore.setItemAsync(item, data);
}

export async function storeDelete(item) {
	await SecureStore.deleteItemAsync(item);
}
