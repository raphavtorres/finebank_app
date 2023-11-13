import { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";

import { styles } from "./style";

import BottomSheet from "@gorhom/bottom-sheet";

import { getAccountObj } from "../../../services/functions";
import { getCards, makeTransaction } from "../../../services/api";

import LinkBox from "../../LinkBox";

export default function TransactionBackdrop(props) {
	const [accountObj, setAccountObj] = useState({});
	const [cardsData, setCardsData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			setAccountObj(await getAccountObj());
		}
		fetchData();
	}, []);

	useEffect(() => {
		async function fetchData() {
			accountObj.id && setCardsData(await getCards(accountObj.id));
		}
		fetchData();
	}, [accountObj]);

	async function handleMakeTransaction(card) {
		await makeTransaction(card.id);
	}

	return (
		<BottomSheet ref={props.bottomSheetRef} snapPoints={props.snapPoints}>
			<View style={styles.container}>
				<Text style={styles.title}>Escolha seu cartão</Text>
				{cardsData.map((item) => (
					<LinkBox
						key={item.number}
						fields={[
							{
								title: `Cartão ${item.flag}`,
								value: item.number,
							},
						]}
						image={
							<Image
								source={require("../../../assets/small-card-img.png")}
								style={{}}
							/>
						}
						action={() => handleMakeTransaction(item)}
					/>
				))}
			</View>
		</BottomSheet>
	);
}
