import { View, Text, Image, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { COLORS } from "../constant/styleConstant";

import { useAuth } from "../context/AuthContext";
import { getUsername } from "../services/functions";
import { useEffect, useState } from "react";

import UserPicture from "./UserPicture";

export default function UserProfileHeader(props) {
	const [username, setUsername] = useState("");
	const { onLogout } = useAuth();

	useEffect(() => {
		async function fetchData() {
			setUsername(await getUsername());
		}
		fetchData();
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.profileView}>
				<UserPicture />
				<Text style={styles.userName}>Olá, {username}</Text>
			</View>

			<Pressable onPress={onLogout} style={styles.signOutBtn}>
				<Text style={styles.signOutTxt}>Sair</Text>
			</Pressable>
		</View>
	);
}

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginTop: 35,
		marginBottom: 40,
		width: "95%",
		justifyContent: "space-between",
	},

	profileView: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},

	profilePic: {
		width: 45,
		height: 45,
	},

	userName: {
		color: COLORS.primaryWhite,
		fontSize: 18,
		fontWeight: "500",
		paddingLeft: 15,
	},

	signOutBtn: {
		width: 70,
		height: 40,
		borderRadius: 10,
		backgroundColor: COLORS.lightBlack,
		justifyContent: "center",
	},

	signOutTxt: {
		textAlign: "center",
		fontSize: 18,
		fontWeight: "500",
		color: COLORS.primaryWhite,
	},
});
