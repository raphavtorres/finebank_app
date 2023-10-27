import { View, Text, Image, StyleSheet } from "react-native";
import { COLORS } from "../style/constants";

export default function OptCard(props) {
	var url = "";

	switch (props.url) {
		case "loan":
			url = require("../assets/loan-icon-img.png");
			break;
		case "transaction":
			url = require("../assets/transaction-icon-img.png");
			break;
		case "investment":
			url = require("../assets/investment-icon-img.png");
			break;
		default:
			url = require("../assets/card-icon-img.png");
	}

	return (
		<View style={styles.optCard}>
			<Image style={styles.flag} source={url} />
			<Text style={styles.text}>{props.name}</Text>
		</View>
	);
}

export const styles = StyleSheet.create({
	optCard: {
		width: 125,
		height: 125,
		marginTop: 40,
		marginHorizontal: 10,
		paddingVertical: 20,
		borderRadius: 15,
		backgroundColor: COLORS.lightBlack,
		justifyContent: "space-around",
		alignItems: "center",
	},

	text: {
		color: COLORS.primaryWhite,
		textAlign: "center",
		fontSize: 15,
		fontWeight: "600",
	},
});
