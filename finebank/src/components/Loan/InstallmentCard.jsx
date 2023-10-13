import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { COLORS } from "../../style/constants";

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
				<TouchableOpacity style={styles.payInstallmentBtn}>
					<Text style={styles.payInstallmentTxt}>Pagar</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export const styles = StyleSheet.create({
	installmentCard: {
		marginTop: 10,
		paddingHorizontal: 20,
		paddingVertical: 15,
		width: 394,
		height: 100,
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

	payInstallmentBtn: {
		width: 116,
		height: 33,
		borderRadius: 5,
		backgroundColor: COLORS.lightYellow,
		justifyContent: "center",
		alignItems: "center",
	},

	payInstallmentTxt: {
		color: COLORS.primaryBlack,
		fontSize: 16,
		fontWeight: "700",
	},
});
