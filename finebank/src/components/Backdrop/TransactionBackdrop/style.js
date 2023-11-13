import { StyleSheet } from "react-native";
import { COLORS } from "../../../constant/styleConstant";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		backgroundColor: COLORS.lightBlack,
	},

	title: {
		marginVertical: 80,
		width: 223,
		color: COLORS.primaryWhite,
		textAlign: "center",
		fontSize: 24,
		fontWeight: "700",
	},
});
