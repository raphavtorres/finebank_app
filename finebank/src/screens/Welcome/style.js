import { StyleSheet } from "react-native";
import { COLORS } from "../../constant/styleConstant";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.primaryBlack,
		alignItems: "center",
	},

	logo: {
		marginTop: 60,
		width: 274,
		height: 67,
	},

	panelImg: {
		marginTop: 54,
		width: 399,
		height: 210,
	},

	title: {
		marginTop: 54,
		width: 399,
		color: COLORS.primaryWhite,
		// fontFamily: "Inter",
		fontSize: 36,
		fontWeight: "500",
	},

	parag: {
		marginTop: 15,
		width: 399,
		color: COLORS.primaryWhite,
		// font-family: Inter,
		fontSize: 20,
		fontWeight: "300",
	},
});
