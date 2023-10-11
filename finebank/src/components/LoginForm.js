import { Text, View, TextInput, ScrollView} from "react-native";

import { useForm, Controller } from "react-hook-form";
import { styles } from "../screens/Login/style";
import ButtonWide from "./ButtonWide";

export default function LoginForm() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({});

	function handleLogin(data) {
		console.log(data);
	}

	return (
		<View style={{ flex: 1, width: "100%", backgroundColor: "green" }}>
			<Text>LOGIN</Text>

				<Controller
					control={control}
					name="username"
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							style={styles.input}
							onChangeText={onChange}
							onBlur={onBlur} // when textinput is focused
							value={value}
							placeholder="CPF / CNPJ"
						/>
					)}
				/>


			{/* <TextInput
				style={styles.input}
				onChangeText={setPassword}
				value={password}
				placeholder="Senha"
			/> */}

			<ButtonWide btnMsg="Login" action={handleSubmit(handleLogin)} />
		</View>
	);
}
