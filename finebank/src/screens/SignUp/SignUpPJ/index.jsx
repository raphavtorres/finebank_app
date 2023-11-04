import React from "react";
import {
	View,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
} from "react-native";

import { styles } from "./style";
import SignUpHeader from "../../../components/SignupHeader/SignUpHeader";
import SignUpPJForm from "../../../components/SignUpPJForm";

export default function SignUpPF({ navigation }) {
	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<KeyboardAvoidingView behavior="height">
					<SignUpHeader accType={"PJ"} />
					<SignUpPJForm navigation={navigation} />
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</View>
	);
}
