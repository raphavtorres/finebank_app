import { StyleSheet } from "react-native";
import { COLORS } from "../../constant/styleConstant";

export const styles = StyleSheet.create({
	container: {
		maxWidth: "100%",
		marginBottom: 40,
		marginTop: 40,
		paddingLeft: 20,
	},

	title: {
		marginBottom: 5,
		width: 399,
		color: COLORS.primaryWhite,
		// fontFamily: "Inter",
		fontSize: 32,
		fontWeight: "700",
	},
});
