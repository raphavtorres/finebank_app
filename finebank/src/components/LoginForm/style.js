import { StyleSheet } from "react-native";
import { COLORS } from "../../style/constants";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		// backgroundColor: "green",
	},

	input: {
		width: "85%",
		height: 40,
		backgroundColor: COLORS.primaryBlack,
		paddingBottom: 10,
		marginTop: 55,
		color: COLORS.primaryWhite,
		fontSize: 20,
		borderBottomColor: COLORS.primaryWhite,
		borderBottomWidth: 2,
	},

	inputError: {
		borderBottomColor: "#FC7676",
	},

	inputOk: {
		borderBottomColor: "#67B06A",
	},

	labelError: {
		maxWidth: "85%",
		width: "85%",
		color: "#FC7676",
		marginTop: 8,
	},

	linksLoginView: {
		maxWidth: "100%",
		width: "84%",
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 40,
	},

	linksLogin: {
		color: COLORS.primaryGray,
	},
});
