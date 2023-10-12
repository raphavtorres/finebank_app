import { Text, View, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { styles } from "./style";
import { COLORS } from "../../style/constants";
import ButtonWide from "../ButtonWide";

const schema = yup.object({
	// cpfOrCnpj: yup
	// 	.number("Apenas números")
	// 	.typeError("Utilize apenas números")
	// 	.min(11111111111111, "Digite um CPF / CNPJ válido")
	// 	.max(99999999999999, "Digite um CPF / CNPJ válido")
	// 	.required("CPF / CNPJ é um campo obrigatório"),
	cpfOrCnpj: yup
		.string()
		.transform((value, originalValue) => {
			// Remove todos os caracteres que não são dígitos
			if (originalValue) {
				return originalValue.replace(/[^\d]/g, "");
			}
			return "";
		})
		.test("valid-cpf-cnpj", "Digite um CPF / CNPJ válido", (value) => {
			if (!value) return true; // Aceitar campo vazio
			const isCpfValid = value.length === 11;
			const isCnpjValid = value.length === 14;
			return isCpfValid || isCnpjValid;
		})
		.required("CPF / CNPJ é um campo obrigatório"),
	password: yup
		.string()
		.min(6, "Senha deve ter no mínimo 6 caracteres")
		.max(20, "Senha deve ter no máximo 20 caracteres")
		.required("A senha é um campo obrigatório"),
});

export default function LoginForm() {
	const [inputValue, setInputValue] = useState("");

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

	function getInput(error, value) {
		if (error) {
			return [styles.input, styles.inputError];
		} else if (!value) {
			return styles.input;
		}
		return [styles.input, styles.inputOk];
	}

	return (
		<>
			<ScrollView
				style={{
					width: "100%",
					maxWidth: "100%",
					// backgroundColor: "yellow",
				}}
			>
				{/* <KeyboardAvoidingView behavior="position" enabled> */}
				<View style={styles.container}>
					<Controller
						control={control}
						name="cpfOrCnpj"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={getInput(errors.cpfOrCnpj, value)}
								// onChangeText={onChange}
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
					{errors.cpfOrCnpj && (
						<Text style={styles.labelError}>{errors.cpfOrCnpj?.message}</Text>
					)}

					<Controller
						control={control}
						name="password"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={getInput(errors.password, value)}
								onChangeText={onChange}
								onBlur={onBlur} // when textinput is focused
								value={value}
								placeholder="Sua senha"
								secureTextEntry={true}
								placeholderTextColor={COLORS.primaryGray}
							/>
						)}
					/>
					{errors.password && (
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
