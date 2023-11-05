import { StyleSheet } from "react-native";
import { COLORS } from "../../../constant/styleConstant";

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
		marginTop: "30%",
		justifyContent: "space-around",
		alignItems: "center",
	},
});
