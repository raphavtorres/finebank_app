import React from "react";

import { Text, View, TextInput, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { TextInputMask } from "react-native-masked-text";

import { styles } from "./style";
import { COLORS } from "../../constant/styleConstant";

import ButtonWide from "../ButtonWide";

import { schema } from "./schemaSignUpAddress";
import { useAuth } from "../../context/AuthContext";
import { getSignUpData } from "../../services/functions";
import {
	createPF,
	createPJ,
	createAccount,
	createAddress,
	createPhone,
	createEmail,
	createPhone,
	createEmail,
} from "../../services/api";

export default function SignUpAddressForm({ navigation }) {
	const { onRegister } = useAuth();

	const {
		control,
		handleSubmit,
		formState: { errors },
		trigger,
	} = useForm({
		resolver: yupResolver(schema),
	});

	function transformDate(date) {
		const slices = date.split("/");
		return slices[2] + "-" + slices[1] + "-" + slices[0];
	}

	function unmountTelephone(telephone) {
		const slices = telephone
			.replace("(", "")
			.replace(")", "")
			.replace("-", "")
			.split(" ");

		const phone = slices[1];
		const prefix_number = slices[0];
		return { phone: phone, prefix_number: prefix_number };
	}

	async function handleSignUp(data) {
		try {
			// get singup data from signup form + password
			const signupData = await getSignUpData();

			var registerNumber = "";
			var date = "";
			var accType = "";
			var emailVar = "";
			var telephoneVar = "";

			const { neighborhood, street, number, city, state, cep, password } = data;

			var date = "";
			var accType = "";
			var emailVar = "";
			var telephoneVar = "";

			// testing account type and creating account
			// NATURAL PERSON
			if (signupData.cpf) {
				const {
					cpf,
					fullname,
					birthdate,
					rg,
					socialname,
					optionSelected,
					email,
					telephone,
				} = signupData;
				registerNumber = cpf;
				date = transformDate(birthdate);
				accType = optionSelected;
				emailVar = email;
				telephoneVar = telephone;

				// await createPF(cpf, password, fullname, date, rg, socialname);

				// LEGAL PERSON
			} else if (signupData.cnpj) {
				const {
					cnpj,
					name,
					fantasyName,
					establishmentDate,
					im,
					ie,
					optionSelected,
					email,
					telephone,
				} = signupData;
				registerNumber = cnpj;
				date = transformDate(establishmentDate);
				accType = optionSelected;
				emailVar = email;
				telephoneVar = telephone;

				await createPJ(cnpj, password, fantasyName, date, im, ie, name);
			}

			// ACCOUNT
			// optionSelected
			await onRegister(registerNumber, password);
			// await createAccount(accType);

			// ADRESS
			await createAddress(
				neighborhood,
				street,
				number,
				city,
				state,
				cep,
				(customer = registerNumber)
			);

			// PHONE
			const { phone, prefix_number } = unmountTelephone(telephoneVar);
			await createPhone(phone, prefix_number, (customer = registerNumber));

			// EMAIL
			await createEmail(emailVar, (customer = registerNumber));
		} catch (err) {
			console.log(err);
		}

		// navigation.navigate("Login");
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

					{/* CITY */}
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
								placeholder="Rua"
								placeholderTextColor={COLORS.primaryGray}
								maxLength={40}
							/>
						)}
					/>
					{errors?.street && (
						<Text style={styles.labelError}>{errors.street?.message}</Text>
					)}

					{/* NUMBER */}
					<Controller
						control={control}
						name="number"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInputMask
								type={"only-numbers"}
								style={getInput(errors.number)}
								onChangeText={(value) => {
									onChange(value);
									trigger("number");
								}}
								onBlur={onBlur}
								value={value}
								placeholder="Número"
								placeholderTextColor={COLORS.primaryGray}
								maxLength={5}
							/>
						)}
					/>
					{errors?.number && (
						<Text style={styles.labelError}>{errors.number?.message}</Text>
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
								autoCapitalize="none"
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
						name="passwordConfirmation"
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								style={getInput(errors.passwordConfirmation)}
								onChangeText={(value) => {
									onChange(value);
									trigger("passwordConfirmation");
								}}
								onBlur={onBlur}
								value={value}
								placeholder="Confirmar Senha"
								secureTextEntry={true}
								placeholderTextColor={COLORS.primaryGray}
								autoCapitalize="none"
								maxLength={20}
							/>
						)}
					/>
					{errors?.passwordConfirmation && (
						<Text style={styles.labelError}>
							{errors.passwordConfirmation?.message}
						</Text>
					)}
				</View>
				<View
					style={{
						marginVertical: 60,
						marginRight: 10,
					}}
				>
					<ButtonWide btnMsg="Cadastrar" action={handleSubmit(handleSignUp)} />
				</View>
			</ScrollView>
		</>
	);
}
