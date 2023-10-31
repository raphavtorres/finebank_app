import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./src/screens/Welcome";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Investment from "./src/screens/Investment";
import Loan from "./src/screens/Loan";
import Transaction from "./src/screens/Transaction";
import SignUpHome from "./src/screens/SignUp/SignUpHome";
import SignUpPF from "./src/screens/SignUp/SignUpPF";
import SignUpPJ from "./src/screens/SignUp/SignUpPJ";
import SignUpAddress from "./src/screens/SignUp/SignUpAddress";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				{/* <Stack.Screen name="Welcome" component={Welcome} /> */}
				{/* <Stack.Screen name="Login" component={Login} /> */}
				{/* <Stack.Screen name="Home" component={Home} /> */}
				{/* <Stack.Screen name="Investment" component={Investment} /> */}
				{/* <Stack.Screen name="Loan" component={Loan} /> */}
				{/* <Stack.Screen name="Transaction" component={Transaction} /> */}
				{/* <Stack.Screen name="SignUpHome" component={SignUpHome} /> */}
				{/* <Stack.Screen name="SignUpPF" component={SignUpPF} /> */}
				<Stack.Screen name="SignUpPJ" component={SignUpPJ} />
				{/* <Stack.Screen name="SignUpAddress" component={SignUpAddress} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
