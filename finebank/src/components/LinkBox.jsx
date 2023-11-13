import { View, Text, Pressable, StyleSheet } from "react-native";
import { COLORS } from "../constant/styleConstant";
import Separator from "./Separator";

export default function LinkBox(props) {
	// const fields = [
	// 	{
	// 		title: "Agência",
	// 		value: 4242,
	// 	},
	// 	{
	// 		title: "Conta",
	// 		value: 3737373,
	// 	},
	// ];
	const fields = props.fields;

	return (
		<>
			<Pressable style={styles.accContainer} onPress={props.action}>
				{props.image}
				{fields &&
					fields.map((item) => (
						<View style={styles.infoContainer}>
							<Text style={styles.lightTxt}>{item.title}</Text>
							<Text style={styles.strongTxt}>{item.value}</Text>
						</View>
					))}
			</Pressable>
			<Separator />
		</>
	);
	// return (
	// 	<>
	// 		<Pressable style={styles.accContainer} onPress={props.action}>
	// 			{props.image}
	// 			<View style={styles.infoContainer}>
	// 				<Text style={styles.lightTxt}>Agência</Text>
	// 				<Text style={styles.strongTxt}>{props.agency}</Text>
	// 			</View>
	// 			<View style={styles.infoContainer}>
	// 				<Text style={styles.lightTxt}>Conta</Text>
	// 				<Text style={styles.strongTxt}>{props.account}</Text>
	// 			</View>
	// 		</Pressable>
	// 		<Separator />
	// 	</>
	// );
}

export const styles = StyleSheet.create({
	accContainer: {
		flexDirection: "row",
		width: "96%",
	},

	infoContainer: {
		flex: 1,
		flexDirection: "row",
		paddingLeft: 10,
		alignItems: "center",
	},

	lightTxt: {
		color: COLORS.primaryGray,
		fontSize: 20,
		fontWeight: "400",
		marginRight: 20,
	},

	strongTxt: {
		color: COLORS.primaryWhite,
		fontSize: 20,
		fontWeight: "700",
	},
});
