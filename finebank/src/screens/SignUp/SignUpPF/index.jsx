import React from "react";
import {
	View,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
} from "react-native";

import { styles } from "./style";
import SignUpHeader from "../../../components/SignupHeader/SignUpHeader";
import SignUpPFForm from "../../../components/SignUpPFForm";

export default function SignUpPF() {
	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<KeyboardAvoidingView behavior="height">
					<SignUpHeader accType={"PF"} />
					<SignUpPFForm />
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</View>
	);
}
