import { View, Text, Image } from "react-native";

import { StyleSheet } from "react-native";
import { COLORS } from "../style/constants";

export default function Card(props) {
	const card = props.item;
	var url = "";

	const last_digits = " " + card.number.slice(-4);
	const first_digits = card.number.substr(0, 14);
	var card_number_hidden = first_digits.replace(/\d/g, "*") + last_digits;

	switch (card.flag) {
		case "MasterCard":
			url = require("../assets/mastercard-icon.png");
			break;
		case "Visa":
			url = require("../assets/visa-icon.png");
			break;
		case "Elo":
			url = require("../assets/elo-icon.png");
			break;
	}

	return (
		<View style={styles.card} key={card.number}>
			<Text style={styles.cardNumber}>{card_number_hidden}</Text>

			<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
				<View>
					<Text style={styles.cvvLabel}>CVV</Text>
					<Text style={styles.cvvNumber}>{card.verification_code}</Text>
				</View>
				<Image style={styles.flag} source={url} />
			</View>
		</View>
	);
}

export const styles = StyleSheet.create({
	card: {
		width: 360,
		height: 200,
		borderRadius: 30,
		backgroundColor: COLORS.lightBlack,
		marginHorizontal: 5,
		paddingHorizontal: 24,
		paddingTop: 35,
	},

	cardNumber: {
		color: COLORS.primaryWhite,
		fontSize: 24,
		fontWeight: "500",
		marginBottom: 60,
	},

	cvvLabel: {
		color: COLORS.primaryGray,
		fontSize: 20,
		fontWeight: "500",
	},

	cvvNumber: {
		color: COLORS.primaryWhite,
		fontSize: 20,
		fontWeight: "500",
	},

	flag: { width: 55, height: 35, alignSelf: "flex-end" },
});
