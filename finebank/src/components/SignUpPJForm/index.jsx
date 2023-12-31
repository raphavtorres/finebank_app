import React, { useState, useEffect } from "react";

import { Text, View, TextInput, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { TextInputMask } from "react-native-masked-text";

import { styles } from "./style";
import { COLORS } from "../../constant/styleConstant";

import ButtonWide from "../ButtonWide";
import SelectBtn from "../SelectBtn";

import { schema } from "./schemaSignUpPJ";
import { setSignUpData } from "../../services/functions";

export default function SignUpPFForm({ navigation }) {
	const [savingsAcc, setSavingsAcc] = useState(false);
	const [checkingAcc, setCheckingAcc] = useState(false);
	const [accountTypeError, setAccountTypeError] = useState(false);
	const [optionSelected, setOptionSelected] = useState("");

	useEffect(() => {
		if (savingsAcc) {
			setCheckingAcc(false);
			setOptionSelected("savings");
		}
	}, [savingsAcc]);

	useEffect(() => {
		if (checkingAcc) {
			setSavingsAcc(false);
			setOptionSelected("checking");
		}
	}, [checkingAcc]);

	useEffect(() => {
		if (!checkingAcc && !savingsAcc) {
			setOptionSelected("");
		}
	}, [checkingAcc, savingsAcc]);

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
			await setSignUpData({ optionSelected, ...data });
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
					{/* CNPJ */}
					<Controller
						control={control}
						name="cnpj"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInputMask
								type={"cnpj"}
								style={getInput(errors.cnpj)}
								onChangeText={(value) => {
									onChange(value);
									trigger("cnpj");
								}}
								onBlur={onBlur}
								value={value}
								placeholder="CNPJ"
								placeholderTextColor={COLORS.primaryGray}
								maxLength={18}
							/>
						)}
					/>
					{errors?.cnpj && (
						<Text style={styles.labelError}>{errors.cnpj?.message}</Text>
					)}

					{/* INSCRIÇÃO MUNICIPAL */}
					<Controller
						control={control}
						name="im"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInputMask
								type={"only-numbers"}
								style={getInput(errors.im)}
								onChangeText={(value) => {
									onChange(value);
									trigger("im");
								}}
								onBlur={onBlur}
								value={value}
								placeholder="Inscrição Municipal"
								placeholderTextColor={COLORS.primaryGray}
								maxLength={10}
							/>
						)}
					/>
					{errors?.im && (
						<Text style={styles.labelError}>{errors.im?.message}</Text>
					)}

					{/* Inscrição Estadual */}
					<Controller
						control={control}
						name="ie"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInputMask
								type={"only-numbers"}
								style={getInput(errors.ie)}
								onChangeText={(value) => {
									onChange(value);
									trigger("ie");
								}}
								onBlur={onBlur}
								value={value}
								placeholder="Inscrição Estadual"
								placeholderTextColor={COLORS.primaryGray}
								maxLength={10}
							/>
						)}
					/>
					{errors?.ie && (
						<Text style={styles.labelError}>{errors.ie?.message}</Text>
					)}

					{/* NAME */}
					<Controller
						control={control}
						name="name"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={getInput(errors.name)}
								onChangeText={(value) => {
									onChange(value);
									trigger("name");
								}}
								onBlur={onBlur}
								value={value}
								placeholder="Nome"
								placeholderTextColor={COLORS.primaryGray}
								maxLength={40}
							/>
						)}
					/>
					{errors?.name && (
						<Text style={styles.labelError}>{errors.name?.message}</Text>
					)}

					{/* FANTASY NAME */}
					<Controller
						control={control}
						name="fantasyName"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={getInput(errors.fantasyName)}
								onChangeText={(value) => {
									onChange(value);
									trigger("fantasyName");
								}}
								onBlur={onBlur}
								value={value}
								placeholder="Nome Fantasia"
								placeholderTextColor={COLORS.primaryGray}
								maxLength={40}
							/>
						)}
					/>
					{errors?.fantasyName && (
						<Text style={styles.labelError}>{errors.fantasyName?.message}</Text>
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
								autoCapitalize="none"
								maxLength={40}
							/>
						)}
					/>
					{errors?.email && (
						<Text style={styles.labelError}>{errors.email?.message}</Text>
					)}

					{/* ESTABLISHMENT DATE */}
					<Controller
						control={control}
						name="establishmentDate"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInputMask
								type={"datetime"}
								options={{
									format: "DD/MM/YYYY",
								}}
								style={getInput(errors.establishmentDate)}
								onChangeText={(value) => {
									onChange(value);
									trigger("establishmentDate");
								}}
								onBlur={onBlur}
								value={value}
								// value={value.getRawValue()}
								placeholder="Data de estabelecimento"
								placeholderTextColor={COLORS.primaryGray}
								maxLength={10}
							/>
						)}
					/>
					{errors?.establishmentDate && (
						<Text style={styles.labelError}>
							{errors.establishmentDate?.message}
						</Text>
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
						selected={checkingAcc}
						setSelected={setCheckingAcc}
						text="Corrente"
						width={112}
					/>
					<SelectBtn
						selected={savingsAcc}
						setSelected={setSavingsAcc}
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
