import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { COLORS } from "../../constant/styleConstant";

export default function InstallmentCard(props) {
	return (
		<View style={styles.installmentCard}>
			<View style={styles.section}>
				<Text style={styles.installmentID}>{props.number}</Text>
				<Text style={styles.label}>
					Expira em: <Text style={styles.value}>{props.expiration_date}</Text>
				</Text>
			</View>
			<View style={styles.section}>
				<Text style={styles.label}>
					Valor da parcela:{" "}
					<Text style={styles.value}>R$ {props.payment_amount}</Text>
				</Text>
			</View>
		</View>
	);
}

export const styles = StyleSheet.create({
	installmentCard: {
		marginTop: 10,
		paddingHorizontal: 20,
		paddingVertical: 10,
		width: 394,
		height: 70,
		borderRadius: 20,
		backgroundColor: COLORS.lightBlack,
		justifyContent: "space-between",
	},

	section: {
		flexDirection: "row",
		justifyContent: "space-between",
	},

	installmentID: {
		color: COLORS.primaryGray,
		fontSize: 16,
		fontWeight: "500",
	},

	label: {
		color: COLORS.primaryGray,
		fontSize: 14,
		fontWeight: "500",
	},

	value: {
		color: COLORS.primaryWhite,
		fontSize: 16,
		fontWeight: "500",
	},
});
