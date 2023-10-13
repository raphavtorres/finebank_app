import React from "react";
import { View, Text, ScrollView } from "react-native";

import { styles } from "./style";

import UserProfileHeader from "../../components/UserProfileHeader";
import LoanCard from "../../components/Loan/LoanCard";
import InstallmentCard from "../../components/Loan/InstallmentCard";

export default function Loan() {
	return (
		<View style={styles.container}>
			{/* USER PROFILE HEADER */}
			<UserProfileHeader username="User" />

			{/* MY LOANS */}
			<View style={styles.section}>
				<Text style={styles.sectionLabel}>Empréstimos</Text>
				<ScrollView>
					<LoanCard
						amount_request="5.534,00"
						approval_date="13/09/2023"
						interest_rate="10%"
						request_date="10/08/2023"
						observation=""
						installment_amount="2/10"
					/>
					<LoanCard
						amount_request="5.534,00"
						approval_date="13/09/2023"
						interest_rate="10%"
						request_date="10/08/2023"
						observation=""
						installment_amount="2/10"
					/>
					<LoanCard
						amount_request="5.534,00"
						approval_date="13/09/2023"
						interest_rate="10%"
						request_date="10/08/2023"
						observation=""
						installment_amount="2/10"
					/>
				</ScrollView>
			</View>

			{/* INSTALLMENTS */}
			<View style={[styles.section, styles.sectionInstallment]}>
				<Text style={styles.sectionLabel}>Parcelas</Text>
				<ScrollView>
					<InstallmentCard
						number="00234"
						payment_amount="553,40"
						expiration_date="13/09/2023"
					/>
					<InstallmentCard
						number="00234"
						payment_amount="553,40"
						expiration_date="13/09/2023"
					/>
					<InstallmentCard
						number="00234"
						payment_amount="553,40"
						expiration_date="13/09/2023"
					/>
				</ScrollView>
			</View>
		</View>
	);
}
