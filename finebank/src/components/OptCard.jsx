import { View, Text, Image, StyleSheet } from "react-native";
import { COLORS } from "../style/constants";

export default function OptCard(props) {
	function getImage() {
		if (props.url == "loan") {
			return <Image source={require("../assets/loan-icon-img.png")} />;
		} else if (props.url == "transaction") {
			return <Image source={require("../assets/transaction-icon-img.png")} />;
		} else if (props.url == "investment") {
			return <Image source={require("../assets/investment-icon-img.png")} />;
		}
		return <Image source={require("../assets/card-icon-img.png")} />;
	}
	return (
		<View style={styles.optCard}>
			{getImage()}
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
