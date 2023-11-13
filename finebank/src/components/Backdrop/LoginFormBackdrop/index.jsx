import { useState, useEffect } from "react";
import { Text, View } from "react-native";

import { styles } from "./style";

import BottomSheet from "@gorhom/bottom-sheet";

import { useAuth } from "../../../context/AuthContext";
import { getAccounts } from "../../../services/api";
import {
	storeGet,
	storeSet,
	JWT_KEY,
	ACCOUNT_JSON,
} from "../../../constant/apiConstant";

import LinkBox from "../../LinkBox";

export default function LoginFormBackdrop(props) {
	const { setAuthState } = useAuth();

	const [accountsData, setAccountsData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			setAccountsData(await getAccounts());
		};
		fetchData();
	}, []);

	async function handleEnterAccount(account_selected) {
		setAuthState({
			jwt: await storeGet(JWT_KEY),
			authenticated: true,
		});

		const accountJsonAsString = JSON.stringify(account_selected);
		await storeSet(ACCOUNT_JSON, accountJsonAsString);
	}

	return (
		<BottomSheet ref={props.bottomSheetRef} snapPoints={props.snapPoints}>
			<View style={styles.container}>
				<Text style={styles.title}>Qual conta você deseja acessar ?</Text>
				{accountsData.map((item) => (
					<LinkBox
						key={item.number}
						fields={[
							{
								title: "Agência",
								value: item.agency,
							},
							{
								title: "Conta",
								value: item.number,
							},
						]}
						action={() => handleEnterAccount(item)}
					/>
				))}
			</View>
		</BottomSheet>
	);
}
