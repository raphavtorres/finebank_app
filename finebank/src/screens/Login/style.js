import { StyleSheet } from "react-native";
import { COLORS } from "../../constant/styleConstant";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: COLORS.primaryBlack,
	},

	imageBackground: {
		flex: 1,
		resizeMode: "cover",
		alignItems: "center",
	},

	title: {
		marginBottom: 5,
		width: 399,
		color: COLORS.primaryWhite,
		fontSize: 36,
		fontWeight: "700",
	},

	labelError: {
		alignSelf: "flex-start",
		color: "#ff375b",
		marginBottom: 8,
	},
});
