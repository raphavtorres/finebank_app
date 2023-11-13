import React, { useMemo, useRef, useState, useEffect } from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { ProgressBar } from "react-native-paper";

import { styles } from "./style";
import { COLORS } from "../../constant/styleConstant";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import OptCard from "../../components/OptCard";
import UserProfileHeader from "../../components/UserProfileHeader";
import Card from "../../components/Card";
import HomeStatementBackdrop from "../../components/Backdrop/HomeStatementBackdrop";

import { getAccountObj } from "../../services/functions";
import { getCards, getStatements, requestCard } from "../../services/api";

export default function Home({ navigation }) {
	const [accountObj, setAccountObj] = useState({});
	const [data, setData] = useState({
		cardsData: [],
		statementData: [],
	});
	const [cardMap, setCardMap] = useState([
		{
			number: "",
			verification_code: 0,
			flag: "-",
		},
	]);
	const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

	const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);

	const bottomSheetRef = useRef(null);

	useEffect(() => {
		async function fetchData() {
			setAccountObj(await getAccountObj());
		}
		fetchData();
	}, []);

	useEffect(() => {
		async function fetchData() {
			accountObj.id &&
				setData({
					cardsData: await getCards(accountObj.id),
					statementData: await getStatements(accountObj.id),
				});
		}
		fetchData();
	}, [accountObj]);

	useEffect(() => {
		data.cardsData && setCardMap(data.cardsData);
		// data.cardsData.length > 0 && setCardMap(data.cardsData);
	}, [data && data.cardsData]);

	function handleStatementOpen() {
		setIsBottomSheetVisible(true);
		bottomSheetRef.current?.snapToIndex(1);
	}

	const usedLimit = (178.0).toFixed(2);

	return (
		<>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<BottomSheetModalProvider>
					<View style={styles.container}>
						{/* USER PROFILE HEADER */}
						<UserProfileHeader username="User" />

						<View style={{ height: 200 }}>
							{/* CARD  */}
							<ScrollView
								horizontal={true}
								showsHorizontalScrollIndicator={false}
							>
								{cardMap.map((item) => (
									<Card item={item} key={item.number} />
								))}
							</ScrollView>
						</View>

						{/* ACCOUNT BALANCE */}
						<View style={styles.accBalanceView}>
							<Pressable onPress={handleStatementOpen}>
								<Text style={styles.labelAccBalance}>
									Extrato{"   "}
									<Image
										style={{ width: 8, height: 12 }}
										source={require("../../assets/arrow-icon.png")}
									/>
								</Text>
								<Text style={styles.amountAccBalance}>
									R$ {accountObj?.balance}
								</Text>
							</Pressable>
						</View>
						{/* OPTIONS CARDS */}
						<View style={{ height: 180 }}>
							<ScrollView
								horizontal={true}
								showsHorizontalScrollIndicator={false}
							>
								<OptCard
									name="Empréstimo"
									url="loan"
									action={() => navigation.navigate("Loan")}
								/>
								<OptCard
									name="Transação"
									url="transaction"
									action={() => navigation.navigate("Transaction")}
								/>
								<OptCard
									name="Investimento"
									url="investment"
									action={() => navigation.navigate("Investment")}
								/>
								<OptCard
									name="Solicitar Cartão"
									url="card"
									action={async () => await requestCard(accountObj.id)}
								/>
							</ScrollView>
						</View>
						{/* CREDIT LIMIT */}
						<View style={styles.credtLimitView}>
							<Text style={styles.labelCredtLimit}>Limite de crédito</Text>
							<View style={styles.labelView}>
								<Text style={styles.usedLabelTxt}>Utilizado</Text>
								<Text style={styles.usedLabelTxt}>Disponível</Text>
							</View>
							<View style={styles.labelView}>
								<Text style={styles.amountCredLabel}>R$ {usedLimit}</Text>
								<Text style={styles.amountCredLabel}>
									R$ {accountObj?.credit_limit}
								</Text>
							</View>
							<View style={styles.progBarView}>
								<ProgressBar
									progress={0.45}
									// progress={usedLimit / parseFloat(accountObj.credit_limit)}
									style={{ height: 35, borderRadius: 8 }}
									color={COLORS.lightYellow}
								/>
							</View>
						</View>
					</View>
					{isBottomSheetVisible && (
						<HomeStatementBackdrop
							snapPoints={snapPoints}
							bottomSheetRef={bottomSheetRef}
							statementData={data.statementData}
						/>
					)}
				</BottomSheetModalProvider>
			</GestureHandlerRootView>
		</>
	);
}
