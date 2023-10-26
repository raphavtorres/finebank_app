import { View, Text } from "react-native";

import { StyleSheet } from "react-native";
import { COLORS } from "../style/constants";

export default function Card(props) {
	return (
		<View style={styles.card} key={props.item}>
			<Text>{props.item}</Text>
		</View>
	);
}

export const styles = StyleSheet.create({
	card: {
		width: 360,
		height: 190,
		borderRadius: 30,
		backgroundColor: COLORS.lightBlack,
		marginHorizontal: 5,
	},
});
