import React, { useState, useEffect, useMemo, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { View, Text, TextInput } from "react-native";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { yupResolver } from "@hookform/resolvers/yup";

import { styles } from "./style";

import UserProfileHeader from "../../components/UserProfileHeader";
import ButtonWide from "../../components/ButtonWide";
import SelectBtn from "../../components/SelectBtn";
import TransactionBackdrop from "../../components/Backdrop/TransactionBackdrop";

import { COLORS } from "../../constant/styleConstant";
import { schema } from "./schemaTransaction";

export default function Transaction({ navigation }) {
	const [formData, setFormData] = useState({
		inputs: {},
		paymentMethod: "",
	});
	const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
	const [creditSelected, setCreditSelected] = useState(false);
	const [debitSelected, setDebitSelected] = useState(false);
	const [payMethodError, setPayMethodError] = useState(false);
	const [optionSelected, setOptionSelected] = useState("");

	const snapPoints = useMemo(() => ["70%"], []);
	const bottomSheetRef = useRef(null);

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

	useEffect(() => {
		if (!debitSelected && !creditSelected) {
			setOptionSelected("");
		} else {
			setPayMethodError(false);
		}
	}, [debitSelected, creditSelected]);

	const {
		control,
		handleSubmit,
		formState: { errors },
		trigger,
	} = useForm({
		resolver: yupResolver(schema),
	});

	function handleConfirm(data) {
		if (optionSelected == "") {
			setPayMethodError(true);
		} else {
			setIsBottomSheetVisible(true);
			setFormData({
				inputs: data,
				paymentMethod: optionSelected,
			});
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
			<GestureHandlerRootView style={{ flex: 1 }}>
				<BottomSheetModalProvider>
					<View style={styles.container}>
						<UserProfileHeader username="User" />

						<View style={styles.section}>
							{/* TRANSACTION AMOUNT */}
							<View style={{ marginBottom: 40 }}>
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
							</View>

							{/* CPF / CNPJ */}
							<View style={{ marginBottom: 40 }}>
								<Text style={styles.label}>Para quem vai transferir?</Text>
								<Controller
									control={control}
									name="accountNumber"
									render={({ field: { onChange, onBlur, value } }) => (
										<TextInput
											style={getInput(errors.accountNumber)}
											onChangeText={(value) => {
												onChange(value);
												trigger("accountNumber");
											}}
											onBlur={onBlur} // when textinput is focused
											value={value}
											placeholder="Conta de quem irá receber"
											placeholderTextColor={COLORS.primaryGray}
											maxLength={8}
											keyboardType="numeric"
										/>
									)}
								/>
								{errors?.accountNumber && (
									<Text style={styles.labelError}>
										{errors.accountNumber?.message}
									</Text>
								)}
							</View>

							{/* PAYMENT METHOD */}
							<View style={{ marginBottom: 40 }}>
								<Text style={styles.label}>Qual o método de pagamento?</Text>
								<View
									style={{ width: "95%", flexDirection: "row", marginTop: 20 }}
								>
									<SelectBtn
										selected={creditSelected}
										setSelected={setCreditSelected}
										text="Crédito"
										width={112}
									/>
									<SelectBtn
										selected={debitSelected}
										setSelected={setDebitSelected}
										text="Débito"
										width={112}
									/>
								</View>
								{payMethodError && (
									<Text style={styles.labelError}>
										Escolha uma forma de pagamento, é obrigatória.
									</Text>
								)}
							</View>
						</View>
						<View
							style={{
								height: "100%",
								width: "100%",
								justifyContent: "flex-end",
								paddingTop: 90,
								paddingRight: 10,
							}}
						>
							<ButtonWide
								btnMsg="Confirmar"
								action={handleSubmit(handleConfirm)}
							/>
						</View>
					</View>
					{isBottomSheetVisible && (
						<TransactionBackdrop
							navigation={navigation}
							snapPoints={snapPoints}
							bottomSheetRef={bottomSheetRef}
							formData={formData}
						/>
					)}
				</BottomSheetModalProvider>
			</GestureHandlerRootView>
		</>
	);
}
