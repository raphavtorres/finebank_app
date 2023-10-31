import { Text, View, Image } from "react-native";
import { styles } from "./style";

export default function SignUpHeader(props) {
	return (
		<>
			<Image
				style={{ position: "absolute", right: 0, top: -50 }}
				source={require("../../assets/header-component-img.png")}
			/>
			<View style={styles.container}>
				<View style={{ marginTop: 40, marginLeft: 10 }}>
					<Text style={styles.title}>Crie</Text>
				</View>
				<View style={{ marginLeft: 40 }}>
					<Text style={styles.title}>Sua Conta {props.accType}</Text>
				</View>
			</View>
		</>
	);
}
