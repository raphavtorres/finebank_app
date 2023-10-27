import { View, Text, Image, StyleSheet } from "react-native";
import { COLORS } from "../style/constants";

export default function SelectBtn(props) {
	return (
		<View style={styles.btnBox}>
			<Text style={styles.btnText}>{props.text}</Text>
		</View>
	);
}

export const styles = StyleSheet.create({
	btnBox: {
		width: 112,
		height: 70,
		borderRadius: 20,
		backgroundColor: COLORS.lightBlack,
		alignItems: "center",
		justifyContent: "center",
		marginRight: 20,
	},

	btnText: {
		color: COLORS.primaryWhite,
		fontSize: 20,
		fontWeight: "700",
	},
});
