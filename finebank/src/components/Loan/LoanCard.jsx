import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { COLORS } from "../../style/constants";

export default function LoanCard(props) {
	return (
		<View style={styles.loanCard}>
			<View style={styles.section}>
				{/* LOAN VALUE */}
				<View>
					<Text style={styles.label}>Valor:</Text>
					<Text style={styles.mainValue}>{props.amount_request}</Text>
				</View>
				<View>
					<Text style={styles.label}>Aprovado em:</Text>
					<Text style={styles.mainValue}>{props.approval_date}</Text>
				</View>
			</View>
			{/* DETAILS */}
			<View>
				<View>
					<View style={{ flexDirection: "row" }}>
						<Text style={styles.label}>Taxa de juros:</Text>
						<Text style={styles.value}>{props.interest_rate}</Text>
					</View>
					<View style={{ flexDirection: "row" }}>
						<Text style={styles.label}>Requerido em:</Text>
						<Text style={styles.value}>{props.request_date}</Text>
					</View>
				</View>
			</View>
			{/* OBSERVATION */}
			<View style={styles.section}>
				<Text style={styles.label}>
					Oberservação: <Text style={styles.value}>{props.observation}</Text>
				</Text>
				<Text style={styles.label}>
					Parcelas: <Text style={styles.value}>{props.installment_amount}</Text>
				</Text>
			</View>
		</View>
	);
}

export const styles = StyleSheet.create({
	loanCard: {
		marginTop: 10,
		paddingHorizontal: 20,
		paddingVertical: 10,
		width: 394,
		height: 150,
		borderRadius: 20,
		backgroundColor: COLORS.lightBlack,
		justifyContent: "space-between",
	},

	section: { flexDirection: "row", justifyContent: "space-between" },

	label: {
		color: COLORS.primaryGray,
		fontSize: 14,
		fontWeight: "500",
	},

	mainValue: {
		color: COLORS.primaryWhite,
		fontSize: 16,
		fontWeight: "500",
	},

	value: {
		marginLeft: 5,
		color: COLORS.primaryWhite,
		fontSize: 14,
		fontWeight: "500",
	},
});
