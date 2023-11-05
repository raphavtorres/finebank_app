import { Text, View, TextInput, ScrollView, Pressable } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { styles } from "./style";
import { COLORS } from "../../constant/styleConstant";

import ButtonWide from "../ButtonWide";
import LoginFormBackdrop from "../Backdrop/LoginFormBackdrop";

import { schema } from "./schemaLogin";

import { useAuth } from "../../context/AuthContext";
import { storeGetJWT } from "../../constant/apiConstant";

// import { getAccounts } from "../../services/api";

export default function LoginForm({ navigation }) {
	// const [accountsData, setAccountsData] = useState([]);
	const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
	const { setAuthState, onLogin } = useAuth();

	const snapPoints = useMemo(() => ["70%"], []);
	const bottomSheetRef = useRef(null);

	const {
		control,
		handleSubmit,
		formState: { errors },
		trigger,
	} = useForm({
		resolver: yupResolver(schema),
	});

	async function handleLogin(data) {
		const { cpfOrCnpj, password } = data;
		const response = await onLogin(cpfOrCnpj, password);

		if (response && response.error) {
			alert(response.msg);
		} else {
			setIsBottomSheetVisible(true);
		}
		// Test login info
		// Get accounts info and show in BottomSheet
	}

	async function handleEnterAccount() {
		setAuthState({
			jwt: await storeGetJWT(),
			authenticated: true,
		});

		console.log("Need to get the right account from API");
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
								maxLength={14}
								keyboardType="numeric"
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
								maxLength={20}
							/>
						)}
					/>
					{errors?.password && (
						<Text style={styles.labelError}>{errors.password?.message}</Text>
					)}

					<View style={styles.linksLoginView}>
						<Pressable onPress={() => navigation.navigate("SignUpHome")}>
							<Text style={styles.linksLogin}>Cadastrar-se</Text>
						</Pressable>
						<Text style={styles.linksLogin}>Esqueci minha senha</Text>
					</View>
				</View>
			</ScrollView>
			<ButtonWide btnMsg="Login" action={handleSubmit(handleLogin)} />
			{isBottomSheetVisible && (
				<LoginFormBackdrop
					snapPoints={snapPoints}
					bottomSheetRef={bottomSheetRef}
					action={handleEnterAccount}
					// data={accountsData}
				/>
			)}
		</>
	);
}
