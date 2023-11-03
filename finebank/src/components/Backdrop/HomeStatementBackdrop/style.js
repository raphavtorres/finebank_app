import { StyleSheet } from "react-native";
import { COLORS } from "../../../style/constants";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		backgroundColor: COLORS.lightBlack,
	},

	title: {
		marginVertical: 30,
		width: 223,
		color: COLORS.primaryWhite,
		textAlign: "center",
		fontSize: 22,
		fontWeight: "700",
	},

	transactionContainer: {
		flexDirection: "row",
		width: "96%",
		justifyContent: "space-around",
		alignSelf: "center",
	},

	txtView: {
		flex: 1,
	},

	lightTxt: {
		color: COLORS.primaryGray,
		fontSize: 20,
		fontWeight: "400",
	},

	strongTxt: {
		color: COLORS.primaryWhite,
		fontSize: 20,
		fontWeight: "700",
		marginRight: 20,
	},
});
