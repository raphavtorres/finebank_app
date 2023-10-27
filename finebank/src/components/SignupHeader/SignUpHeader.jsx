import { Text, View } from "react-native";
import { styles } from "./style";

export default function SignUpHeader() {
	return (
		<View style={styles.container}>
			<View style={{ marginTop: 90, marginLeft: 10 }}>
				<Text style={styles.title}>Crie</Text>
			</View>
			<View style={{ marginLeft: 40 }}>
				<Text style={styles.title}>Sua Conta</Text>
			</View>
		</View>
	);
}
