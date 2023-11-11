import { storeGet, USER_TYPE, USER_JSON } from "../constant/apiConstant";

export async function getUsername() {
	const userJson = JSON.parse(await storeGet(USER_JSON));
	const userType = await storeGet(USER_TYPE);

	console.log("USER JSONNN: ", userJson);
	return userType == "natural" ? userJson.name : userJson.fantasy_name;
}
