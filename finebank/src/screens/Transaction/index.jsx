import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
	View,
	Text,
	TextInput,
	ScrollView,
	TouchableOpacity,
} from "react-native";

import { styles } from "./style";

import UserProfileHeader from "../../components/UserProfileHeader";
import ButtonWide from "../../components/ButtonWide";
import SelectBtn from "../../components/SelectBtn";
import { COLORS } from "../../style/constants";

export default function Transaction() {
	const {
		control,
		handleSubmit,
		formState: { errors },
		trigger,
	} = useForm({
		// resolver: yupResolver(schema),
	});

	function handleConfirm(data) {
		console.log(data);
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
						/>
					)}
				/>
				{errors?.transactionAmount && (
					<Text style={styles.labelError}>
						{errors.transactionAmount?.message}
					</Text>
				)}

				<Text style={styles.label}>Para quem vai transferir?</Text>
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
						/>
					)}
				/>
				{errors?.cpfOrCnpj && (
					<Text style={styles.labelError}>{errors.cpfOrCnpj?.message}</Text>
				)}
				<Text style={styles.label}>Qual o método de pagamento?</Text>
				<View style={{ width: "95%", flexDirection: "row", marginTop: 20 }}>
					<SelectBtn text="Crédito" />
					<SelectBtn text="Débito" />
				</View>
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
