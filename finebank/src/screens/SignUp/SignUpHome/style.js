import { StyleSheet } from "react-native";
import { COLORS } from "../../../style/constants";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: COLORS.primaryBlack,
	},

	section: {
		height: 220,
		width: "95%",
		marginBottom: 10,
		marginTop: "20%",
		justifyContent: "space-around",
		alignItems: "center",
	},
});
