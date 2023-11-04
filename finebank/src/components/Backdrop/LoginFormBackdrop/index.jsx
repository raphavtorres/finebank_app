import { Text, View, Pressable } from "react-native";

import { styles } from "./style";

import BottomSheet from "@gorhom/bottom-sheet";
import { COLORS } from "../../../style/constants";

export function Separator() {
	return (
		<View
			style={{
				height: 1,
				width: "100%",
				backgroundColor: COLORS.primaryGray,
				marginVertical: 20,
			}}
		/>
	);
}
export function AccountLink(props) {
	return (
		<>
			<Pressable style={styles.accContainer} onPress={props.action}>
				<View style={styles.infoContainer}>
					<Text style={styles.lightTxt}>Agência</Text>
					<Text style={styles.strongTxt}>{props.agency}</Text>
				</View>
				<View style={styles.infoContainer}>
					<Text style={styles.lightTxt}>Conta</Text>
					<Text style={styles.strongTxt}>{props.account}</Text>
				</View>
			</Pressable>
			<Separator />
		</>
	);
}

export default function LoginFormBackdrop(props) {
	return (
		<BottomSheet
			// enableOverDrag
			// enablePanDownToClose
			ref={props.bottomSheetRef}
			// index={2}
			snapPoints={props.snapPoints}
		>
			<View style={styles.container}>
				<Text style={styles.title}>Qual conta você deseja acessar ?</Text>
				<AccountLink agency={"**82"} account={"**206"} action={props.action} />
				<AccountLink agency={"**24"} account={"**912"} action={props.action} />
			</View>
		</BottomSheet>
	);
}
