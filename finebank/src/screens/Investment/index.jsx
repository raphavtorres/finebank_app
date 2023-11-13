import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

import { styles } from "./style";

import UserProfileHeader from "../../components/UserProfileHeader";
import InvestmentCard from "../../components/InvestmentCard";

import { getInvestments, getAccountInvestments } from "../../services/api";
import { getAccountObj } from "../../services/functions";

export default function Investment() {
	const [accountObj, setAccountObj] = useState({});
	const [data, setData] = useState({
		investments: [],
		accountInvestments: [],
	});

	useEffect(() => {
		async function fetchData() {
			setAccountObj(await getAccountObj());
		}
		fetchData();
	}, []);

	useEffect(() => {
		async function fetchData() {
			accountObj.id &&
				setData({
					investments: await getInvestments(),
					accountInvestments: await getAccountInvestments(accountObj.id),
				});
		}
		fetchData();
	}, [accountObj]);

	return (
		<View style={styles.container}>
			{/* USER PROFILE HEADER */}
			<UserProfileHeader username="User" />

			{/* MY INVESTMENTS */}
			<View style={styles.section}>
				<Text style={styles.sectionLabel}>Meus investimentos</Text>
				<ScrollView>
					{data.accountInvestments.map((item) => (
						<InvestmentCard
							key={item.id}
							myInvestment
							investment_type={item.investment_type}
							risc_rate={item.risc_rate}
							admin_fee={item.admin_fee}
							contribution={item.contribution}
							period={item.period}
							income={item.income}
						/>
					))}
				</ScrollView>
			</View>

			{/* INVESTMENT STORE */}
			<View style={styles.section}>
				<Text style={styles.sectionLabel}>Produtos disponíveis</Text>
				<ScrollView>
					{data.investments.map((item) => (
						<InvestmentCard
							key={item.id}
							investment_id={item.id}
							account={accountObj.id}
							investment_type={item.investment_type}
							risc_rate={item.risc_rate}
							admin_fee={item.admin_fee}
							contribution={item.contribution}
							period={item.period}
						/>
					))}
				</ScrollView>
			</View>
		</View>
	);
}
