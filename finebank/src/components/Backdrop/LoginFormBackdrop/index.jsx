import { useState, useEffect } from "react";
import { Text, View, Pressable } from "react-native";

import { styles } from "./style";

import BottomSheet from "@gorhom/bottom-sheet";
import { COLORS } from "../../../constant/styleConstant";

import { getAccounts } from "../../../services/api";

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
	const [accountsData, setAccountsData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			setAccountsData(await getAccounts(), "AAAAAAAAAA");
		};
		fetchData();
	}, []);

	return (
		<BottomSheet ref={props.bottomSheetRef} snapPoints={props.snapPoints}>
			<View style={styles.container}>
				<Text style={styles.title}>Qual conta você deseja acessar ?</Text>
				{accountsData.map((item) => (
					<AccountLink
						key={item.number}
						agency={item.agency}
						account={item.number}
						action={props.action}
					/>
				))}
			</View>
		</BottomSheet>
	);
}
