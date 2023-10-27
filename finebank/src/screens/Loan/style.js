import { StyleSheet } from "react-native";
import { COLORS } from "../../style/constants";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: COLORS.primaryBlack,
	},

	section: {
		flex: 1,
		width: "95%",
		marginBottom: 10,
	},

	sectionInstallment: {
		flex: 1,
	},

	sectionLabel: {
		marginBottom: 5,
		color: COLORS.primaryWhite,
		fontSize: 20,
		fontWeight: "500",
	},

	payInstallmentBtn: {
		width: 116,
		height: 33,
		borderRadius: 5,
		backgroundColor: COLORS.lightYellow,
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 5,
	},

	payInstallmentTxt: {
		color: COLORS.primaryBlack,
		fontSize: 16,
		fontWeight: "700",
	},
});
