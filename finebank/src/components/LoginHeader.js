import { Text, View } from "react-native";
import { styles } from "../screens/Login/style";

export default function LoginHeader() {
	return (
		<View style={{ maxWidth: "100%" }}>
			<View style={{ marginTop: 58, marginLeft: 10 }}>
				<Text style={styles.title}>Olá,</Text>
			</View>
			<View style={{ marginLeft: 40 }}>
				<Text style={styles.title}>Bem-Vindo</Text>
			</View>
			<View style={{ marginLeft: 80 }}>
				<Text style={styles.title}>Novamente</Text>
			</View>
		</View>
	);
}
