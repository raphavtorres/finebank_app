import { StyleSheet } from "react-native";
import { COLORS } from "../../style/constants";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: COLORS.primaryBlack,
	},

	section: {
		width: "95%",
		marginBottom: 10,
	},

	label: {
		color: COLORS.primaryWhite,
		fontSize: 24,
		fontWeight: "500",
		marginBottom: 10,
	},

	input: {
		width: "95%",
		height: 40,
		backgroundColor: COLORS.primaryBlack,
		paddingBottom: 10,
		marginTop: 10,
		marginBottom: 70,
		color: COLORS.primaryWhite,
		fontSize: 20,
		borderBottomColor: COLORS.primaryWhite,
		borderBottomWidth: 2,
	},

	inputError: {
		borderBottomColor: "#FC7676",
	},

	labelError: {
		maxWidth: "85%",
		width: "85%",
		color: "#FC7676",
		marginTop: 8,
	},
});
