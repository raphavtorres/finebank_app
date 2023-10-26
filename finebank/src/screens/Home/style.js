import { StyleSheet } from "react-native";
import { COLORS } from "../../style/constants";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLORS.primaryBlack,
	},

	card: {
		width: 360,
		height: 190,
		borderRadius: 30,
		backgroundColor: COLORS.lightBlack,
		marginHorizontal: 5,
	},

	accBalanceView: {
		width: "95%",
	},

	labelAccBalance: {
		marginTop: 50,
		color: COLORS.primaryGray,
		fontSize: 18,
		fontWeight: "500",
	},

	amountAccBalance: {
		marginTop: 10,
		color: COLORS.primaryWhite,
		fontSize: 22,
		fontWeight: "500",
	},

	optCardsView: {
		width: "95%",
		flexDirection: "row",
		justifyContent: "space-between",
	},

	optCard: {
		width: 125,
		height: 125,
		padding: 25,
		borderRadius: 15,
		backgroundColor: COLORS.lightBlack,
		justifyContent: "space-around",
		alignItems: "center",
	},

	credtLimitView: {
		marginTop: 50,
		width: "95%",
	},

	labelCredtLimit: {
		color: COLORS.primaryWhite,
		fontSize: 18,
		fontWeight: "500",
	},

	labelView: {
		marginTop: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	usedLabelTxt: {
		color: COLORS.primaryGray,
		fontSize: 16,
		fontWeight: "500",
	},

	amountCredLabel: {
		color: COLORS.primaryWhite,
		fontSize: 16,
		fontWeight: "500",
	},

	progBarView: {
		marginTop: 15,
	},
});
