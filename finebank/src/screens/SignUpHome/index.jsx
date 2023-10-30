import React, { useState, useEffect } from "react";
import { View } from "react-native";

import { styles } from "./style";
import SignUpHeader from "../../components/SignupHeader/SignUpHeader";
import SelectBtn from "../../components/SelectBtn";
import ButtonWide from "../../components/ButtonWide";

export default function CreateAccountHome() {
	const [PJselected, setPJselected] = useState(false);
	const [PFselected, setPFselected] = useState(false);
	const [optionSelected, setOptionSelected] = useState("");

	useEffect(() => {
		if (PJselected) {
			setPFselected(false);
			setOptionSelected("PJ");
		}
	}, [PJselected]);

	useEffect(() => {
		if (PFselected) {
			setPJselected(false);
			setOptionSelected("PF");
		}
	}, [PFselected]);

	useEffect(() => {
		if (!PFselected && !PJselected) {
			setOptionSelected("");
		}
	}, [PFselected, PJselected]);

	return (
		<View style={styles.container}>
			<SignUpHeader />
			<View style={styles.section}>
				<SelectBtn
					selected={PFselected}
					setSelected={setPFselected}
					text="Pessoa Física"
					width={200}
				/>
				<SelectBtn
					selected={PJselected}
					setSelected={setPJselected}
					text="Pessoa Jurídica"
					width={200}
				/>
			</View>
			<View
				style={{
					height: "100%",
					width: "100%",
					justifyContent: "flex-end",
					paddingTop: 130,
					paddingRight: 10,
				}}
			>
				<ButtonWide btnMsg="Etapa 1/3" />
				{/* <ButtonWide btnMsg="Etapa 1/3" action={} /> */}
			</View>
		</View>
	);
}
