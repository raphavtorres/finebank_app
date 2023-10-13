import React from "react";
import {
	View,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
	Image,
} from "react-native";

import { styles } from "./style";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function Login() {
	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<KeyboardAvoidingView behavior="height">
					<View>
						<Image
							style={{ position: "absolute", right: 0 }}
							source={require("../../assets/teste.png")}
						/>
						<LoginHeader />
						<LoginForm />
					</View>
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</View>
	);
}
