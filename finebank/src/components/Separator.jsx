import { View } from "react-native";
import { COLORS } from "../constant/styleConstant";

export default function Separator() {
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
