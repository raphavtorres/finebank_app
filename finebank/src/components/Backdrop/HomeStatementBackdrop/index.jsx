import { Text, View, ScrollView } from "react-native";

import { styles } from "./style";

import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
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

export default function HomeStatementBackdrop(props) {
	const statementData = props.statementData;

	return (
		<BottomSheet
			enableOverDrag
			enablePanDownToClose
			ref={props.bottomSheetRef}
			index={2}
			snapPoints={props.snapPoints}
		>
			<View style={styles.container}>
				<Text style={styles.title}>Extrato</Text>
				<BottomSheetScrollView
					showsHorizontalScrollIndicator={false}
					style={{ width: "87%" }}
				>
					{statementData.map((transaction) => (
						<>
							<View
								style={styles.transactionContainer}
								key={transaction.amount}
							>
								<View style={styles.txtView}>
									<Text style={styles.lightTxt}>Ação:</Text>

									<Text style={styles.strongTxt}>
										{transaction.transaction_action}
									</Text>
								</View>
								<View style={styles.txtView}>
									<Text style={styles.lightTxt}>De:</Text>
									<Text style={styles.strongTxt}>{transaction.source}</Text>
								</View>
								<View style={styles.txtView}>
									<Text style={styles.lightTxt}>Valor:</Text>
									<Text style={styles.strongTxt}>R$ {transaction.amount}</Text>
								</View>
							</View>
							<Separator />
						</>
					))}
				</BottomSheetScrollView>
			</View>
		</BottomSheet>
	);
}
