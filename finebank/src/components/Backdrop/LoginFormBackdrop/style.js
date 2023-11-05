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

	accContainer: {
		flexDirection: "row",
		width: "96%",
	},

	infoContainer: {
		flex: 1,
		flexDirection: "row",
		paddingLeft: 10,
		alignItems: "center",
	},

	lightTxt: {
		color: COLORS.primaryGray,
		fontSize: 20,
		fontWeight: "400",
		marginRight: 20,
	},

	strongTxt: {
		color: COLORS.primaryWhite,
		fontSize: 20,
		fontWeight: "700",
	},
});
