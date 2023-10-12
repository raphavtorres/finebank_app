import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";

import { COLORS } from "../style/constants";

export default function ButtonWide(props) {
	return (
		<View style={styles.btnContainer}>
			<TouchableOpacity style={styles.btnTouchable} onPress={props.action}>
				<Text style={styles.txt}>{props.btnMsg}</Text>
				<Image
					source={require("../assets/arrow-btn-img.png")}
					style={styles.arrow}
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	btnContainer: {
		flex: 1,
		justifyContent: "flex-end",
		// backgroundColor: "red",
	},

	btnTouchable: {
		alignSelf: "flex-end",
		width: 247,
		height: 84,
		borderRadius: 50,
		backgroundColor: COLORS.lightBlack,
		flexDirection: "row",
		// position: "absolute",
		// bottom: 40,
		// right: 10,
	},

	txt: {
		width: 130,
		color: COLORS.primaryYellow,
		fontSize: 24,
		fontWeight: "400",
		textAlign: "center",
		textAlignVertical: "center",
		marginTop: -5,
		flex: 1,
	},

	arrow: {
		width: 85,
		height: 85,
		alignSelf: "flex-center",
	},
});
