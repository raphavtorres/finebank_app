import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ProgressBar } from "react-native-paper";

import { styles } from "./style";
import { COLORS } from "../../style/constants";

import OptCard from "../../components/OptCard";
import UserProfileHeader from "../../components/UserProfileHeader";
import Card from "../../components/Card";

export default function Home() {
	const cardData = [
		{
			number: 111111111,
			verification_code: 111,
		},
		{
			number: 222222222,
			verification_code: 222,
		},
		{
			number: 333333333,
			verification_code: 333,
		},
	];

	return (
		<View style={styles.container}>
			{/* USER PROFILE HEADER */}
			<UserProfileHeader username="User" />

			<View style={{ height: 200 }}>
				{/* CARD  */}
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					{cardData.map((item) => (
						<Card item={item} />
					))}
				</ScrollView>
			</View>

			{/* ACCOUNT BALANCE */}
			<View style={styles.accBalanceView}>
				<Text style={styles.labelAccBalance}>Extrato</Text>
				<Text style={styles.amountAccBalance}>R$ 3000.00</Text>
			</View>
			{/* OPTIONS CARDS */}
			<View style={{ height: 180 }}>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					<OptCard name="Empréstimo" url="loan" />
					<OptCard name="Transação" url="transaction" />
					<OptCard name="Investimento" url="investment" />
					<OptCard name="Solicitar Cartão" url="card" />
				</ScrollView>
			</View>
			{/* CREDIT LIMIT */}
			<View style={styles.credtLimitView}>
				<Text style={styles.labelCredtLimit}>Limite de crédito</Text>
				<View style={styles.labelView}>
					<Text style={styles.usedLabelTxt}>Utilizado</Text>
					<Text style={styles.usedLabelTxt}>Disponível</Text>
				</View>
				<View style={styles.labelView}>
					<Text style={styles.amountCredLabel}>R$ 850,00</Text>
					<Text style={styles.amountCredLabel}>R$ 1800,00</Text>
				</View>
				<View style={styles.progBarView}>
					<ProgressBar
						progress={0.45}
						style={{ height: 35, borderRadius: 8 }}
						color={COLORS.lightYellow}
					/>
				</View>
			</View>
		</View>
	);
}
