import { Text, View, TextInput, ScrollView, Pressable } from "react-native";
import React, { useMemo, useRef, useCallback, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import BottomSheet from "@gorhom/bottom-sheet";

import { styles } from "./style";
import { COLORS } from "../../style/constants";
import ButtonWide from "../ButtonWide";
import { schema } from "./schemaLogin";

export default function LoginForm() {
	const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(true);

	const snapPoints = useMemo(() => ["70%"], []);
	// const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);
	const bottomSheetRef = useRef(null);

	// const handleClosePress = bottomSheetRef.current?.close();

	const {
		control,
		handleSubmit,
		formState: { errors },
		trigger,
	} = useForm({
		resolver: yupResolver(schema),
	});

	function handleLogin(data) {
		setIsBottomSheetVisible(true);
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
								maxLength={14}
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
						<Text style={styles.linksLogin}>Cadastrar-se</Text>
						<Text style={styles.linksLogin}>Esqueci minha senha</Text>
					</View>
				</View>
			</ScrollView>
			<ButtonWide btnMsg="Login" action={handleSubmit(handleLogin)} />
			{isBottomSheetVisible && (
				// https://stackoverflow.com/questions/63701648/react-native-react-native-reanimated-bottom-sheet-how-can-i-change-the-backg
				<BottomSheet
					// enableOverDrag
					// enablePanDownToClose
					ref={bottomSheetRef}
					// index={2}
					snapPoints={snapPoints}
					style={{
						foregroundColor: "#3B4045",
					}}
				>
					<View
						style={{
							flex: 1,
							borderRadius: 40,
						}}
					>
						<Text>BOTTOM SHEET CONTENT</Text>
					</View>
				</BottomSheet>
			)}
		</>
	);
}
