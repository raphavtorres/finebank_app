import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { ProgressBar } from "react-native-paper";

import { styles } from "./style";
import { COLORS } from "../../style/constants";

import OptCard from "../../components/OptCard";
import UserProfileHeader from "../../components/UserProfileHeader";
import Card from "../../components/Card";

export default function Home() {
	const cardData = [
		{
			number: "5385 8035 1276 7881",
			verification_code: 748,
			flag: "MasterCard",
		},
		{
			number: "5349 4491 8052 3662",
			verification_code: 403,
			flag: "Visa",
		},
		{
			number: "5324 1639 8608 4949",
			verification_code: 757,
			flag: "Elo",
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
						<Card item={item} key={item.number} />
					))}
				</ScrollView>
			</View>

			{/* ACCOUNT BALANCE */}
			<View style={styles.accBalanceView}>
				<Text style={styles.labelAccBalance}>
					Extrato{"   "}
					<Image
						style={{ width: 8, height: 12 }}
						source={require("../../assets/arrow-icon.png")}
					/>
				</Text>
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
