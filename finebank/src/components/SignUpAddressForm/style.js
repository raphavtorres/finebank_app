import { StyleSheet } from "react-native";
import { COLORS } from "../../style/constants";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		minWidth: "100%",
		maxWidth: "100%",
		alignItems: "center",
		paddingTop: 30,
		// backgroundColor: "green",
	},

	input: {
		width: "85%",
		height: 40,
		backgroundColor: COLORS.primaryBlack,
		paddingBottom: 10,
		marginTop: 30,
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
