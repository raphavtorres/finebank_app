import { Text, View } from "react-native";
import { styles } from "./style";

export default function LoginHeader() {
	return (
		<View style={styles.container}>
			<View style={{ marginTop: 90, marginLeft: 10 }}>
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
