import React, { useState, useEffect } from "react";

import { Text, View, TextInput, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { TextInputMask } from "react-native-masked-text";

import { styles } from "./style";
import { COLORS } from "../../style/constants";

import ButtonWide from "../ButtonWide";

import { schema } from "./schemaSignUpAddress";

export default function SignUpAddressForm() {
	const {
		control,
		handleSubmit,
		formState: { errors },
		trigger,
	} = useForm({
		resolver: yupResolver(schema),
	});

	function handleSignUp(data) {
		console.log(data);
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
					{/* CEP */}
					<Controller
						control={control}
						name="cep"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInputMask
								type={"only-numbers"}
								style={getInput(errors.cep)}
								onChangeText={(value) => {
									onChange(value);
									trigger("cep");
								}}
								onBlur={onBlur}
								value={value}
								placeholder="CEP"
								placeholderTextColor={COLORS.primaryGray}
								maxLength={8}
							/>
						)}
					/>
					{errors?.cep && (
						<Text style={styles.labelError}>{errors.cep?.message}</Text>
					)}

					{/* STATE */}
					<Controller
						control={control}
						name="state"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={getInput(errors.state)}
								onChangeText={(value) => {
									onChange(value);
									trigger("state");
								}}
								onBlur={onBlur}
								value={value}
								placeholder="Estado"
								placeholderTextColor={COLORS.primaryGray}
								maxLength={40}
							/>
						)}
					/>
					{errors?.state && (
						<Text style={styles.labelError}>{errors.state?.message}</Text>
					)}

					{/* City */}
					<Controller
						control={control}
						name="city"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={getInput(errors.city)}
								onChangeText={(value) => {
									onChange(value);
									trigger("city");
								}}
								onBlur={onBlur}
								value={value}
								placeholder="Cidade"
								placeholderTextColor={COLORS.primaryGray}
								maxLength={40}
							/>
						)}
					/>
					{errors?.city && (
						<Text style={styles.labelError}>{errors.city?.message}</Text>
					)}

					{/* NEIGHBORHOOD */}
					<Controller
						control={control}
						name="neighborhood"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={getInput(errors.neighborhood)}
								onChangeText={(value) => {
									onChange(value);
									trigger("neighborhood");
								}}
								onBlur={onBlur}
								value={value}
								placeholder="Bairro"
								placeholderTextColor={COLORS.primaryGray}
								maxLength={40}
							/>
						)}
					/>
					{errors?.neighborhood && (
						<Text style={styles.labelError}>
							{errors.neighborhood?.message}
						</Text>
					)}

					{/* STREET */}
					<Controller
						control={control}
						name="street"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={getInput(errors.street)}
								onChangeText={(value) => {
									onChange(value);
									trigger("street");
								}}
								onBlur={onBlur}
								value={value}
								// value={value.getRawValue()}
								placeholder="Rua"
								placeholderTextColor={COLORS.primaryGray}
								maxLength={40}
							/>
						)}
					/>
					{errors?.street && (
						<Text style={styles.labelError}>{errors.street?.message}</Text>
					)}

					{/* PASSWORD */}
					<Controller
						control={control}
						name="password"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={getInput(errors.password)}
								onChangeText={(value) => {
									onChange(value);
									trigger("password");
								}}
								onBlur={onBlur}
								value={value}
								placeholder="Senha"
								secureTextEntry={true}
								placeholderTextColor={COLORS.primaryGray}
								maxLength={20}
							/>
						)}
					/>
					{errors?.password && (
						<Text style={styles.labelError}>{errors.password?.message}</Text>
					)}

					{/* CONFIRM PASSWORD */}
					<Controller
						control={control}
						name="confirmPassword"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={getInput(errors.confirmPassword)}
								onChangeText={(value) => {
									onChange(value);
									trigger("confirmPassword");
								}}
								onBlur={onBlur}
								value={value}
								placeholder="Confirmar Senha"
								secureTextEntry={true}
								placeholderTextColor={COLORS.primaryGray}
								maxLength={20}
							/>
						)}
					/>
					{errors?.confirmPassword && (
						<Text style={styles.labelError}>
							{errors.confirmPassword?.message}
						</Text>
					)}
				</View>
				<View
					style={{
						marginVertical: 60,
						marginRight: 10,
					}}
				>
					<ButtonWide btnMsg="Etapa 2/3" />
					{/* <ButtonWide btnMsg="Etapa 2/3" action={handleSubmit(handleLogin)} /> */}
				</View>
			</ScrollView>
		</>
	);
}
