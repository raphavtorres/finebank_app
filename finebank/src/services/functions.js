import {
	storeGet,
	USER_TYPE,
	USER_JSON,
	ACCOUNT_JSON,
} from "../constant/apiConstant";

export async function getUsername() {
	const userJson = JSON.parse(await storeGet(USER_JSON));
	const userType = await storeGet(USER_TYPE);

	return userType == "natural" ? userJson.name : userJson.fantasy_name;
}

export async function getAccountObj() {
	return JSON.parse(await storeGet(ACCOUNT_JSON));
}
