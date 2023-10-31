import { StyleSheet } from "react-native";
import { COLORS } from "../../style/constants";

export const styles = StyleSheet.create({
	container: {
		maxWidth: "100%",
		marginBottom: 40,
		marginTop: 50,
		paddingLeft: 20,
	},

	title: {
		marginBottom: 5,
		width: 399,
		color: COLORS.primaryWhite,
		fontSize: 32,
		fontWeight: "700",
	},
});
