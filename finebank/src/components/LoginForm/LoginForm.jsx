import { Text, View, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { styles } from "./style";
import { COLORS } from "../../style/constants";
import ButtonWide from "../ButtonWide";
import schema from "./schemaLogin";

export default function LoginForm() {
	const {
		control,
		handleSubmit,
		formState: { errors },
		trigger,
	} = useForm({
		resolver: yupResolver(schema),
	});

	function handleLogin(data) {
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
					width: "100%",
					maxWidth: "100%",
				}}
			>
				<View style={styles.container}>
					<Controller
						control={control}
						name="cpfOrCnpj"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={getInput(errors.cpfOrCnpj)}
								onChangeText={(value) => {
									onChange(value);
									trigger("cpfOrCnpj");
								}}
								onBlur={onBlur} // when textinput is focused
								value={value}
								placeholder="CPF / CNPJ"
								placeholderTextColor={COLORS.primaryGray}
							/>
						)}
					/>
					{errors?.cpfOrCnpj && (
						<Text style={styles.labelError}>{errors.cpfOrCnpj?.message}</Text>
					)}

					<Controller
						control={control}
						name="password"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={getInput(errors.password)}
								onChangeText={onChange}
								onBlur={onBlur} // when textinput is focused
								value={value}
								placeholder="Sua senha"
								secureTextEntry={true}
								placeholderTextColor={COLORS.primaryGray}
							/>
						)}
					/>
					{errors?.password && (
						<Text style={styles.labelError}>{errors.password?.message}</Text>
					)}

					<View style={styles.linksLoginView}>
						<Text style={styles.linksLogin}>Cadastrar-se</Text>
						<Text style={styles.linksLogin}>Esqueci minha senha</Text>
					</View>
				</View>
			</ScrollView>
			<ButtonWide btnMsg="Login" action={handleSubmit(handleLogin)} />
		</>
	);
}
