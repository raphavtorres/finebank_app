import { StyleSheet } from "react-native";
import { COLORS } from "../../style/constants";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "red",
		backgroundColor: COLORS.primaryBlack,
		alignItems: "center",
	},

	imageBackground: {
		flex: 1,
		resizeMode: "cover",
		// justifyContent: "center",
		alignItems: "center",

	},

	title: {
		marginBottom: 5,
		width: 399,
		color: COLORS.primaryWhite,
		// fontFamily: "Inter",
		fontSize: 36,
		fontWeight: "500",
	},
});
