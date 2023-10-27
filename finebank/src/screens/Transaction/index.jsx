import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { View, Text, TextInput } from "react-native";

// import { TextInputMask } from "react-native-masked-text";
import { yupResolver } from "@hookform/resolvers/yup";

import { styles } from "./style";

import UserProfileHeader from "../../components/UserProfileHeader";
import ButtonWide from "../../components/ButtonWide";
import SelectBtn from "../../components/SelectBtn";

import { COLORS } from "../../style/constants";
import { schema } from "./schemaTransaction";

export default function Transaction() {
	const [creditSelected, setCreditSelected] = useState(false);
	const [debitSelected, setDebitSelected] = useState(false);
	const [optionSelected, setOptionSelected] = useState("");

	useEffect(() => {
		if (creditSelected) {
			setDebitSelected(false);
			setOptionSelected("Credit");
		}
	}, [creditSelected]);

	useEffect(() => {
		if (debitSelected) {
			setCreditSelected(false);
			setOptionSelected("Debit");
		}
	}, [debitSelected]);

	const {
		control,
		handleSubmit,
		formState: { errors },
		trigger,
	} = useForm({
		resolver: yupResolver(schema),
	});

	function handleConfirm(data) {
		console.log(data, optionSelected);
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
				{/* TRANSACTION AMOUNT */}
				<Text style={styles.label}>Qual o valor da transferência?</Text>
				<Controller
					control={control}
					name="transactionAmount"
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							style={getInput(errors.transactionAmount)}
							onChangeText={(value) => {
								onChange(value);
								trigger("transactionAmount");
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
				{errors?.transactionAmount && (
					<Text style={styles.labelError}>
						{errors.transactionAmount?.message}
					</Text>
				)}

				{/* CPF / CNPJ */}
				<Text style={styles.label}>Para quem vai transferir?</Text>
				<Controller
					control={control}
					name="cpfOrCnpj"
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							// type={"cpf"}
							style={getInput(errors.cpfOrCnpj)}
							onChangeText={(value) => {
								// onChange(value.replaceAll(".", "").replaceAll("-", ""));
								onChange(value);
								trigger("cpfOrCnpj");
							}}
							onBlur={onBlur} // when textinput is focused
							value={value}
							placeholder="CPF / CNPJ"
							placeholderTextColor={COLORS.primaryGray}
							maxLength={14}
							keyboardType="numeric"
						/>
					)}
				/>
				{errors?.cpfOrCnpj && (
					<Text style={styles.labelError}>{errors.cpfOrCnpj?.message}</Text>
				)}
				<Text style={styles.label}>Qual o método de pagamento?</Text>
				<View style={{ width: "95%", flexDirection: "row", marginTop: 20 }}>
					<SelectBtn
						selected={creditSelected}
						setSelected={setCreditSelected}
						text="Crédito"
					/>
					<SelectBtn
						selected={debitSelected}
						setSelected={setDebitSelected}
						text="Débito"
					/>
				</View>
				{/* {missedSelection && (
					<Text style={styles.labelError}>
						{errors.transactionAmount?.message}
					</Text>
				)} */}
			</View>
			<View
				style={{
					// backgroundColor: "red",
					height: "100%",
					width: "100%",
					justifyContent: "flex-end",
					paddingTop: 130,
					paddingRight: 10,
				}}
			>
				<ButtonWide btnMsg="Confirmar" action={handleSubmit(handleConfirm)} />
			</View>
		</View>
	);
}
