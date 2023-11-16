import {
	storeGet,
	storeSet,
	USER_TYPE,
	USER_JSON,
	ACCOUNT_JSON,
	SIGNUP_DATA,
} from "../constant/apiConstant";

export async function getUsername() {
	const userJson = JSON.parse(await storeGet(USER_JSON));
	const userType = await storeGet(USER_TYPE);

	return userType == "natural" ? userJson.name : userJson.fantasy_name;
}

export async function getAccountObj() {
	return JSON.parse(await storeGet(ACCOUNT_JSON));
}

export async function setSignUpData(signUpData) {
	const signUpDataAsString = JSON.stringify(signUpData);
	await storeSet(SIGNUP_DATA, signUpDataAsString);
}

export async function getSignUpData() {
	return JSON.parse(await storeGet(SIGNUP_DATA));
}
