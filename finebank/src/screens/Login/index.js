import React from "react";
import {
	Text,
	View,
	ImageBackground,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
	Image
} from "react-native";

import { styles } from "./style";
import ButtonWide from "../../components/ButtonWide";
import LoginHeader from "../../components/LoginHeader";
import LoginForm from "../../components/LoginForm";

export default function Login() {
	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				 <KeyboardAvoidingView > 
					<View>
							<Image style={{position: "absolute", right: 0}}source={require("../../assets/teste.png")}/>
							<LoginHeader />
							<LoginForm/>
					{/* <ImageBackground
						source={require("../../assets/background-img.png")}
						style={styles.imageBackground}
					>
						<LoginHeader />
						<LoginForm />

					</ImageBackground> */}
					</View>

				 </KeyboardAvoidingView> 
			</TouchableWithoutFeedback>

		</View>
	);
}
