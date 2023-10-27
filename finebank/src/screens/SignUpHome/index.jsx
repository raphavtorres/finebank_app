import React from "react";
import { View, Image } from "react-native";

import { styles } from "./style";
import SignUpHeader from "../../components/SignupHeader/SignUpHeader";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function CreateAccountHome() {
	return (
		<View style={styles.container}>
			<Image
				style={{ position: "absolute", right: 0 }}
				source={require("../../assets/header-component-img.png")}
			/>
			<SignUpHeader />
			{/* <LoginForm /> */}
		</View>
	);
}
