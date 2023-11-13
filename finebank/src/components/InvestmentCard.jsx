import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { COLORS } from "../constant/styleConstant";

import { postAccountInvestments } from "../services/api";

export default function InvestmentCard(props) {
	return (
		<View style={styles.investmentCard}>
			<View style={styles.section}>
				<Text style={styles.mainLabel}>{props.investment_type}</Text>
				<Text style={styles.mainLabel}>{props.risc_rate}</Text>
			</View>
			<View style={styles.section}>
				<Text style={styles.grayLabel}>{props.investment_type}</Text>
				<Text style={styles.grayLabel}>{props.admin_fee}</Text>
			</View>
			<View style={styles.section}>
				<View style={{ marginTop: 10 }}>
					<View style={{ flexDirection: "row" }}>
						<Text style={styles.grayLabel}>Contribuição:</Text>
						<Text style={styles.txtValues}>{props.contribution}</Text>
					</View>
					<View style={{ flexDirection: "row" }}>
						<Text style={styles.grayLabel}>Vence em:</Text>
						<Text style={styles.txtValues}>{props.period}</Text>
					</View>
				</View>
				{props.myInvestment ? (
					<Text style={styles.income}>{props.income}</Text>
				) : (
					<TouchableOpacity
						onPress={async () =>
							await postAccountInvestments(props.investment_id, props.account)
						}
						style={styles.addInvestBtn}
					>
						<Text style={styles.addInvestTxt}>Adicionar</Text>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
}

export const styles = StyleSheet.create({
	investmentCard: {
		marginTop: 10,
		paddingHorizontal: 20,
		paddingVertical: 10,
		width: 394,
		height: 150,
		borderRadius: 20,
		backgroundColor: COLORS.lightBlack,
	},

	section: {
		marginTop: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	mainLabel: {
		color: COLORS.primaryWhite,
		fontSize: 16,
		fontWeight: "500",
	},

	grayLabel: {
		color: COLORS.primaryGray,
		fontSize: 14,
		fontWeight: "500",
	},

	txtValues: {
		marginLeft: 10,
		color: COLORS.primaryWhite,
		fontSize: 14,
		fontWeight: "500",
	},

	income: {
		marginTop: 20,
		color: COLORS.primaryYellow,
		fontWeight: "700",
	},

	addInvestBtn: {
		marginTop: 15,
		width: 116,
		height: 33,
		borderRadius: 5,
		backgroundColor: COLORS.lightYellow,
		justifyContent: "center",
		alignItems: "center",
	},

	addInvestTxt: {
		color: COLORS.primaryBlack,
		fontSize: 16,
		fontWeight: "700",
	},
});
