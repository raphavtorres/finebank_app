import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import { COLORS } from "../style/constants";

export default function UserProfileHeader(props) {
	return (
		<View style={styles.profileView}>
			{/* props.url to image */}
			<Image
				source={require("../assets/profile-img.png")}
				style={styles.profilePic}
			/>
			<Text style={styles.userName}>Olá, {props.username}</Text>
		</View>
	);
}

export const styles = StyleSheet.create({
	profileView: {
		marginTop: 35,
		width: "95%",
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
});
