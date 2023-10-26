import { View, Text } from "react-native";

import { StyleSheet } from "react-native";
import { COLORS } from "../style/constants";

export default function Card(props) {
	const card = props.item;
	return (
		<View style={styles.card} key={card.number}>
			<Text style={styles.cardNumber}>{card.number}</Text>

			<Text>CVV</Text>
			<Text>{card.verification_code}</Text>
		</View>
	);
}

export const styles = StyleSheet.create({
	card: {
		width: 360,
		height: 190,
		borderRadius: 30,
		backgroundColor: COLORS.lightBlack,
		marginHorizontal: 5,
	},

	cardNumber: {
		color: COLORS.primaryWhite,
		fontSize: 24,
		fontWeight: "500",
	},
});
