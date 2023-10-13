import React from "react";
import { View, Text, ScrollView } from "react-native";

import { styles } from "./style";

import UserProfileHeader from "../../components/UserProfileHeader";
import InvestmentCard from "../../components/InvestmentCard";
// import { Card } from "react-pay-card";

export default function Investment() {
	return (
		<View style={styles.container}>
			{/* USER PROFILE HEADER */}
			<UserProfileHeader username="User" />

			{/* MY INVESTMENTS */}
			<View style={styles.section}>
				<Text style={styles.sectionLabel}>Meus investimentos</Text>
				<ScrollView>
					<InvestmentCard
						myInvestment
						investment_type="Tesouro Direto"
						risc_rate="10,09% a.a."
						admin_fee="22% a 15% de IR"
						contribution="R$ 200,00"
						period="01/01/2026"
						income="R$ 10,56"
					/>
					<InvestmentCard
						myInvestment
						investment_type="Tesouro Direto"
						risc_rate="10,09% a.a."
						admin_fee="22% a 15% de IR"
						contribution="R$ 200,00"
						period="01/01/2026"
						income="R$ 10,56"
					/>
					<InvestmentCard
						myInvestment
						investment_type="Tesouro Direto"
						risc_rate="10,09% a.a."
						admin_fee="22% a 15% de IR"
						contribution="R$ 200,00"
						period="01/01/2026"
						income="R$ 10,56"
					/>
				</ScrollView>
			</View>

			{/* INVESTMENT STORE */}
			<View style={styles.section}>
				<Text style={styles.sectionLabel}>Produtos disponíveis</Text>
				<ScrollView>
					<InvestmentCard
						investment_type="Tesouro Direto"
						risc_rate="10,09% a.a."
						admin_fee="22% a 15% de IR"
						contribution="R$ 200,00"
						period="01/01/2026"
					/>
					<InvestmentCard
						investment_type="Tesouro Direto"
						risc_rate="10,09% a.a."
						admin_fee="22% a 15% de IR"
						contribution="R$ 200,00"
						period="01/01/2026"
					/>
					<InvestmentCard
						investment_type="Tesouro Direto"
						risc_rate="10,09% a.a."
						admin_fee="22% a 15% de IR"
						contribution="R$ 200,00"
						period="01/01/2026"
					/>
				</ScrollView>
			</View>
		</View>
	);
}
