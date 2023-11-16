import React, { useState, useEffect } from "react";

import { Text, View, TextInput, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { TextInputMask } from "react-native-masked-text";

import { styles } from "./style";
import { COLORS } from "../../constant/styleConstant";

import ButtonWide from "../ButtonWide";
import SelectBtn from "../SelectBtn";

import { schema } from "./schemaSignUpPF";
import { setSignUpData } from "../../services/functions";

export default function SignUpPFForm({ navigation }) {
	const [PJselected, setPJselected] = useState(false);
	const [PFselected, setPFselected] = useState(false);
	const [accountTypeError, setAccountTypeError] = useState(false);
	const [optionSelected, setOptionSelected] = useState("");

	useEffect(() => {
		if (PJselected) {
			setPFselected(false);
			setOptionSelected("PJ");
		}
	}, [PJselected]);

	useEffect(() => {
		if (PFselected) {
			setPJselected(false);
			setOptionSelected("PF");
		}
	}, [PFselected]);

	useEffect(() => {
		if (!PFselected && !PJselected) {
			setOptionSelected("");
		}
	}, [PFselected, PJselected]);

	const {
		control,
		handleSubmit,
		formState: { errors },
		trigger,
	} = useForm({
		resolver: yupResolver(schema),
	});

	async function handleSignUp(data) {
		if (optionSelected == "") {
			setAccountTypeError(true);
		} else {
			await setSignUpData(data);
			navigation.navigate("SignUpAddress");
		}
	}

	function getInput(error) {
		if (error) {
			return [styles.input, styles.inputError];
		}
		return styles.input;
	}

	return (
		<>
			<ScrollView
				style={{
					marginTop: 38,
					width: "100%",
					maxWidth: "100%",
				}}
			>
				<View style={styles.container}>
					{/* CPF */}
					<Controller
						control={control}
						name="cpf"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInputMask
								type={"cpf"}
								style={getInput(errors.cpf)}
								onChangeText={(value) => {
									onChange(value);
									trigger("cpf");
								}}
								onBlur={onBlur}
								value={value}
								placeholder="CPF"
								placeholderTextColor={COLORS.primaryGray}
								maxLength={14}
							/>
						)}
					/>
					{errors?.cpf && (
						<Text style={styles.labelError}>{errors.cpf?.message}</Text>
					)}

					{/* RG */}
					<Controller
						control={control}
						name="rg"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInputMask
								type={"only-numbers"}
								style={getInput(errors.rg)}
								onChangeText={(value) => {
									onChange(value);
									trigger("rg");
								}}
								onBlur={onBlur}
								value={value}
								placeholder="RG"
								placeholderTextColor={COLORS.primaryGray}
								maxLength={10}
							/>
						)}
					/>
					{errors?.rg && (
						<Text style={styles.labelError}>{errors.rg?.message}</Text>
					)}

					{/* FULL NAME */}
					<Controller
						control={control}
						name="fullname"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={getInput(errors.fullname)}
								onChangeText={(value) => {
									onChange(value);
									trigger("fullname");
								}}
								onBlur={onBlur}
								value={value}
								placeholder="Nome Completo"
								placeholderTextColor={COLORS.primaryGray}
								maxLength={40}
							/>
						)}
					/>
					{errors?.fullname && (
						<Text style={styles.labelError}>{errors.fullname?.message}</Text>
					)}

					{/* SOCIAL NAME */}
					<Controller
						control={control}
						name="socialname"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={getInput(errors.socialname)}
								onChangeText={(value) => {
									onChange(value);
									trigger("socialname");
								}}
								onBlur={onBlur}
								value={value}
								placeholder="Nome Social"
								placeholderTextColor={COLORS.primaryGray}
								maxLength={40}
							/>
						)}
					/>
					{errors?.socialname && (
						<Text style={styles.labelError}>{errors.socialname?.message}</Text>
					)}

					{/* TELEPHONE */}
					<Controller
						control={control}
						name="telephone"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInputMask
								type={"cel-phone"}
								options={{
									maskType: "BRL",
									withDDD: true,
									dddMask: "(99) ",
								}}
								style={getInput(errors.telephone)}
								onChangeText={(value) => {
									onChange(value);
									trigger("telephone");
								}}
								onBlur={onBlur}
								value={value}
								// value={value.getRawValue()}
								placeholder="Telefone"
								placeholderTextColor={COLORS.primaryGray}
								maxLength={15}
							/>
						)}
					/>
					{errors?.telephone && (
						<Text style={styles.labelError}>{errors.telephone?.message}</Text>
					)}

					{/* E-MAIL */}
					<Controller
						control={control}
						name="email"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={getInput(errors.email)}
								onChangeText={(value) => {
									onChange(value);
									trigger("email");
								}}
								onBlur={onBlur}
								value={value}
								placeholder="E-mail"
								placeholderTextColor={COLORS.primaryGray}
								maxLength={40}
							/>
						)}
					/>
					{errors?.email && (
						<Text style={styles.labelError}>{errors.email?.message}</Text>
					)}

					{/* BIRTHDATE */}
					<Controller
						control={control}
						name="birthdate"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInputMask
								type={"datetime"}
								options={{
									format: "DD/MM/YYYY",
								}}
								style={getInput(errors.birthdate)}
								onChangeText={(value) => {
									onChange(value);
									trigger("birthdate");
								}}
								onBlur={onBlur}
								value={value}
								// value={value.getRawValue()}
								placeholder="Data de nascimento"
								placeholderTextColor={COLORS.primaryGray}
								maxLength={10}
							/>
						)}
					/>
					{errors?.birthdate && (
						<Text style={styles.labelError}>{errors.birthdate?.message}</Text>
					)}
				</View>
				<View
					style={{
						marginTop: 40,
						width: "86%",
						alignSelf: "center",
					}}
				>
					<Text
						style={{
							color: COLORS.primaryWhite,
							fontSize: 20,
							fontWeight: "700",
						}}
					>
						Tipo:
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						width: "85%",
						alignSelf: "center",
						marginTop: 30,
					}}
				>
					<SelectBtn
						selected={PFselected}
						setSelected={setPFselected}
						text="Corrente"
						width={112}
					/>
					<SelectBtn
						selected={PJselected}
						setSelected={setPJselected}
						text="Poupança"
						width={112}
					/>
				</View>
				<View style={{ marginLeft: 30, marginTop: 10 }}>
					{accountTypeError && (
						<Text style={styles.labelError}>
							Escolha o tipo da sua conta, é obrigatório.
						</Text>
					)}
				</View>
				<View
					style={{
						marginVertical: 60,
						marginRight: 10,
					}}
				>
					<ButtonWide btnMsg="Etapa 2/3" action={handleSubmit(handleSignUp)} />
				</View>
			</ScrollView>
		</>
	);
}
