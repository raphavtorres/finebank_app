import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";

import { styles } from "./style";

import UserProfileHeader from "../../components/UserProfileHeader";
import LoanCard from "../../components/Loan/LoanCard";
import InstallmentCard from "../../components/Loan/InstallmentCard";

import { getLoans, getInstallments, patchLoan } from "../../services/api";
import { getAccountObj } from "../../services/functions";

export default function Loan({ navigation }) {
	const [accountObj, setAccountObj] = useState({});
	const [loanData, setLoanData] = useState([]);
	const [installmentData, setInstallmentData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			setAccountObj(await getAccountObj());
		}
		fetchData();
	}, []);

	useEffect(() => {
		async function fetchData() {
			accountObj.id && setLoanData(await getLoans(accountObj.id));
		}
		fetchData();
	}, [accountObj]);

	useEffect(() => {
		async function fetchData() {
			// Itera sobre os empréstimos para buscar as parcelas
			const installments = [];
			for (const loan of loanData) {
				installments.push(...(await getInstallments(loan.id)));
			}
			setInstallmentData(installments);
		}
		fetchData();
	}, [loanData]);

	async function payLoanInstallment() {
		if (loanData) {
			for (const loan of loanData) {
				await patchLoan(loan.id, accountObj.id);
				navigation.navigate("Home");
			}
		}
	}

	return (
		<View style={styles.container}>
			{/* USER PROFILE HEADER */}
			<UserProfileHeader username="User" />

			{/* MY LOANS */}
			<View style={styles.section}>
				<Text style={styles.sectionLabel}>Empréstimos</Text>
				<ScrollView>
					{/* {loanData.length > 0 && */}
					{loanData.map((item) => (
						<LoanCard
							key={item.id}
							amount_request={item.amount_request}
							approval_date={item.approval_date}
							interest_rate={item.interest_rate}
							request_date={item.request_date}
							observation={item.observation}
							installment_amount={item.installment_amount}
						/>
					))}
				</ScrollView>
			</View>

			{/* INSTALLMENTS */}
			<View style={[styles.section, styles.sectionInstallment]}>
				<Text style={styles.sectionLabel}>Fatura</Text>
				<ScrollView>
					{/* {loanData.length > 0 && */}
					{installmentData.map((item) => (
						<InstallmentCard
							key={item.id}
							number={item.number}
							payment_amount={item.payment_amount}
							expiration_date={item.expiration_date}
						/>
					))}
				</ScrollView>
				<View
					style={{
						height: 60,
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "row",
					}}
				>
					<Pressable
						onPress={() => payLoanInstallment()}
						style={styles.payInstallmentBtn}
					>
						<Text style={styles.payInstallmentTxt}>Pagar</Text>
					</Pressable>
					<Pressable
						onPress={() => navigation.navigate("RequestLoan")}
						style={styles.requestLoanBtn}
					>
						<Text style={styles.payInstallmentTxt}>Pedir empréstimo</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
}
