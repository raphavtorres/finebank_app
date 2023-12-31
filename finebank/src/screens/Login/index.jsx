import React from "react";
import {
	View,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
	Image,
	Text
} from "react-native";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { styles } from "./style";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function Login({ navigation }) {
	return (
		<GestureHandlerRootView style={{ flex: 2 }}>
			<BottomSheetModalProvider>
				<View style={styles.container}>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<KeyboardAvoidingView behavior="height">
							<View>
								<Image
									style={{ position: "absolute", right: 0, top: 0 }}
									source={require("../../assets/header-component-img.png")}
								/>
								<LoginHeader />
								<LoginForm navigation={navigation} />
							</View>
						</KeyboardAvoidingView>
					</TouchableWithoutFeedback>
				</View>
			</BottomSheetModalProvider>
		</GestureHandlerRootView>
	);
}
