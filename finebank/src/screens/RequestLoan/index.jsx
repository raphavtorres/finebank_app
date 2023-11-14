import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { View, Text, TextInput } from "react-native";

import { yupResolver } from "@hookform/resolvers/yup";

import { styles } from "./style";

import UserProfileHeader from "../../components/UserProfileHeader";
import ButtonWide from "../../components/ButtonWide";

import { COLORS } from "../../constant/styleConstant";
import { schema } from "./schemaLoan";

import { postLoan } from "../../services/api";
import { getAccountObj } from "../../services/functions";

export default function RequestLoan({ navigation }) {
	const {
		control,
		handleSubmit,
		formState: { errors },
		trigger,
	} = useForm({
		resolver: yupResolver(schema),
	});

	async function requestLoan(data) {
		const account = await getAccountObj();
		const account_id = account.id;

		const { loanAmount, installmentsAmount, observation } = data;

		await postLoan(account_id, loanAmount, installmentsAmount, observation);
		navigation.navigate("Home");
	}

	function getInput(error) {
		if (error) {
			return [styles.input, styles.inputError];
		}
		return styles.input;
	}

	return (
		<View style={styles.container}>
			<UserProfileHeader username="User" />

			<View style={styles.section}>
				{/* LOAN AMOUNT */}
				<View style={{ marginBottom: 40 }}>
					<Text style={styles.label}>Qual o valor do empréstimo?</Text>
					<Controller
						control={control}
						name="loanAmount"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={getInput(errors.loanAmount)}
								onChangeText={(value) => {
									onChange(value);
									trigger("loanAmount");
								}}
								onBlur={onBlur} // when textinput is focused
								value={value}
								placeholder="R$"
								placeholderTextColor={COLORS.primaryGray}
								maxLength={7}
								keyboardType="numeric"
							/>
						)}
					/>
					{errors?.loanAmount && (
						<Text style={styles.labelError}>{errors.loanAmount?.message}</Text>
					)}
				</View>

				{/* INSTALLMENTS AMOUNT */}
				<View style={{ marginBottom: 40 }}>
					<Text style={styles.label}>Número de parcelas</Text>
					<Controller
						control={control}
						name="installmentsAmount"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={getInput(errors.installmentsAmount)}
								onChangeText={(value) => {
									onChange(value);
									trigger("installmentsAmount");
								}}
								onBlur={onBlur} // when textinput is focused
								value={value}
								placeholder="Até 10x"
								placeholderTextColor={COLORS.primaryGray}
								maxLength={2}
								keyboardType="numeric"
							/>
						)}
					/>
					{errors?.installmentsAmount && (
						<Text style={styles.labelError}>
							{errors.installmentsAmount?.message}
						</Text>
					)}
				</View>

				{/* OBSERVATION */}
				<View style={{ marginBottom: 40 }}>
					<Text style={styles.label}>Observação:</Text>
					<Controller
						control={control}
						name="observation"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={getInput(errors.observation)}
								onChangeText={(value) => {
									onChange(value);
									trigger("observation");
								}}
								onBlur={onBlur} // when textinput is focused
								value={value}
								placeholder="Descreva o motivo"
								placeholderTextColor={COLORS.primaryGray}
								maxLength={50}
							/>
						)}
					/>
					{errors?.observation && (
						<Text style={styles.labelError}>{errors.observation?.message}</Text>
					)}
				</View>
			</View>
			<View
				style={{
					height: "100%",
					width: "100%",
					justifyContent: "flex-end",
					paddingTop: 180,
					paddingRight: 10,
				}}
			>
				<ButtonWide btnMsg="Confirmar" action={handleSubmit(requestLoan)} />
			</View>
		</View>
	);
}
