import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";

import { styles } from "./style";

import UserProfileHeader from "../../components/UserProfileHeader";
import LoanCard from "../../components/Loan/LoanCard";
import InstallmentCard from "../../components/Loan/InstallmentCard";

import { storeGet, ACCOUNT_JSON } from "../../constant/apiConstant";
import { getLoans, getInstallments } from "../../services/api";
import { getAccountObj } from "../../services/functions";

export default function Loan() {
	const [accountObj, setAccountObj] = useState({});
	const [loanData, setLoanData] = useState([]);
	const [installmentData, setInstallmentData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			setAccountObj(await getAccountObj());
			console.log("ACCOUNT");
		}
		fetchData();
	}, []);

	useEffect(() => {
		async function fetchData() {
			accountObj.id && setLoanData(await getLoans(accountObj.id));
			console.log("LOAN DATA: ", loanData);
		}
		fetchData();
	}, [accountObj.id]);

	useEffect(() => {
		async function fetchData() {
			// Itera sobre os empréstimos para buscar as parcelas
			const installments = [];
			for (const loan of loanData) {
				installments.push(...(await getInstallments(loan.id)));
			}
			setInstallmentData(installments);
			console.log("INSTALLMENT DATA: ", installments);
		}
		fetchData();
	}, [loanData]);

	return (
		<View style={styles.container}>
			{/* USER PROFILE HEADER */}
			<UserProfileHeader username="User" />

			{/* MY LOANS */}
			<View style={styles.section}>
				<Text style={styles.sectionLabel}>Empréstimos</Text>
				<ScrollView>
					{loanData.length > 0 &&
						loanData.map((item) => (
							<LoanCard
								key={item.id}
								amount_request={item.ammount_request}
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
					{installmentData.length > 0 &&
						installmentData.map((item) => (
							<InstallmentCard
								key={item.id}
								number={item.number}
								payment_amount={item.payment_amount}
								expiration_date={item.expiration_date}
							/>
						))}
				</ScrollView>
				<View
					style={{ height: 60, alignItems: "center", justifyContent: "center" }}
				>
					<Pressable style={styles.payInstallmentBtn}>
						<Text style={styles.payInstallmentTxt}>Pagar</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
}
