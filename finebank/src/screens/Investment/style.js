import { StyleSheet } from "react-native";
import { COLORS } from "../../style/constants";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: COLORS.primaryBlack,
	},

	section: {
		flex: 2,
		width: "95%",
		marginBottom: 10,
	},

	sectionLabel: {
		marginBottom: 5,
		color: COLORS.primaryWhite,
		fontSize: 20,
		fontWeight: "500",
	},
});
