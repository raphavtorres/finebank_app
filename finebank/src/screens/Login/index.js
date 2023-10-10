import React from "react";
import {
	Text,
	View,
	ImageBackground,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
} from "react-native";

import { styles } from "./styles";
import ButtonWide from "../../components/ButtonWide";

export default function index() {
	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<KeyboardAvoidingView behavior="position" enabled>
					<ImageBackground
						source={require("../../assets/background-img.png")}
						style={styles.imageBackground}
					>
						<Text style={styles.title}>Olá, Bem-Vindo Novamente</Text>

						<ButtonWide btnMsg="Login" />
					</ImageBackground>{" "}
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</View>
	);
}
