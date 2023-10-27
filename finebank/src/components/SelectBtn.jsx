import { View, Text, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../style/constants";
import { useState } from "react";

export default function SelectBtn(props) {
	return (
		<Pressable
			// style={styles.btnBoxSelect}
			style={
				props.selected ? [styles.btnBox, styles.btnBoxSelect] : styles.btnBox
			}
			onPress={() => props.setSelected(!props.selected)}
		>
			<Text style={styles.btnText}>{props.text}</Text>
		</Pressable>
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

	btnBoxSelect: {
		borderWidth: 2,
		borderColor: COLORS.lightYellow,
	},

	btnText: {
		color: COLORS.primaryWhite,
		fontSize: 20,
		fontWeight: "700",
	},
});