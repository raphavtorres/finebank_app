import React, { useMemo, useRef, useState } from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { ProgressBar } from "react-native-paper";

import { styles } from "./style";
import { COLORS } from "../../style/constants";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import OptCard from "../../components/OptCard";
import UserProfileHeader from "../../components/UserProfileHeader";
import Card from "../../components/Card";
import HomeStatementBackdrop from "../../components/Backdrop/HomeStatementBackdrop";

export default function Home({ navigation }) {
	const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

	const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);

	const bottomSheetRef = useRef(null);

	function handleStatementOpen() {
		setIsBottomSheetVisible(true);
		bottomSheetRef.current?.snapToIndex(1);
	}

	function requestCard() {
		// code to request card
		console.log("request card");
	}

	const cardData = [
		{
			number: "5385 8035 1276 7881",
			verification_code: 748,
			flag: "MasterCard",
		},
		{
			number: "5349 4491 8052 3662",
			verification_code: 403,
			flag: "Visa",
		},
		{
			number: "5324 1639 8608 4949",
			verification_code: 757,
			flag: "Elo",
		},
	];

	const statementData = [
		{
			transaction_action: "Received",
			source: "11111",
			amount: 70.83,
		},
		{
			transaction_action: "Sent",
			source: "222222",
			amount: 22.54,
		},
		{
			transaction_action: "Received",
			source: "11111",
			amount: 70.83,
		},
	];

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
								{cardData.map((item) => (
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
								<Text style={styles.amountAccBalance}>R$ 3000.00</Text>
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
									action={requestCard}
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
								<Text style={styles.amountCredLabel}>R$ 850,00</Text>
								<Text style={styles.amountCredLabel}>R$ 1800,00</Text>
							</View>
							<View style={styles.progBarView}>
								<ProgressBar
									progress={0.45}
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
							statementData={statementData}
						/>
					)}
				</BottomSheetModalProvider>
			</GestureHandlerRootView>
		</>
	);
}
