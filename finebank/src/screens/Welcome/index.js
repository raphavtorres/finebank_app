import React from "react";
import { Text, View, Image } from "react-native";

import { styles } from "./style";
import ButtonWide from "../../components/ButtonWide";

export default function Welcome() {
	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/yellow-logo-img.png")}
				style={styles.logo}
			/>
			<Image
				source={require("../../assets/home-img.png")}
				style={styles.panelImg}
			/>
			<Text style={styles.title}>
				Super confiável & pronto para receber seu money
			</Text>
			<Text style={styles.parag}>
				Conta gratuita, empréstimo e muito mais: tudo num único app.
			</Text>
			<ButtonWide btnMsg="Começar" />
		</View>
	);
}
