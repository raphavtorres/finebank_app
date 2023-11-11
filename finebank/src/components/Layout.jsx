import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Button } from "react-native";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Investment from "../screens/Investment";
import Loan from "../screens/Loan";
import Transaction from "../screens/Transaction";
import SignUpHome from "../screens/SignUp/SignUpHome";
import SignUpPF from "../screens/SignUp/SignUpPF";
import SignUpPJ from "../screens/SignUp/SignUpPJ";
import SignUpAddress from "../screens/SignUp/SignUpAddress";

import { useAuth } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

export default function Layout() {
	const { authState, onLogout } = useAuth();

	// console.log("AUTHENTICATED(layout page)?:", authState?.authenticated);
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				{authState?.authenticated ? (
					<>
						<Stack.Screen name="Home" component={Home} />
						<Stack.Screen name="Investment" component={Investment} />
						<Stack.Screen name="Loan" component={Loan} />
						<Stack.Screen name="Transaction" component={Transaction} />
					</>
				) : (
					<>
						<Stack.Screen name="Welcome" component={Welcome} />
						<Stack.Screen name="Login" component={Login} />
						<Stack.Screen name="SignUpHome" component={SignUpHome} />
						<Stack.Screen name="SignUpPF" component={SignUpPF} />
						<Stack.Screen name="SignUpPJ" component={SignUpPJ} />
						<Stack.Screen name="SignUpAddress" component={SignUpAddress} />
					</>
				)}

				{/* <Stack.Screen name="Welcome" component={Welcome} /> */}
				{/* <Stack.Screen name="Login" component={Login} /> */}
				{/* <Stack.Screen name="Home" component={Home} /> */}
				{/* <Stack.Screen name="Investment" component={Investment} /> */}
				{/* <Stack.Screen name="Loan" component={Loan} /> */}
				{/* <Stack.Screen name="Transaction" component={Transaction} /> */}
				{/* <Stack.Screen name="SignUpHome" component={SignUpHome} /> */}
				{/* <Stack.Screen name="SignUpPF" component={SignUpPF} /> */}
				{/* <Stack.Screen name="SignUpPJ" component={SignUpPJ} /> */}
				{/* <Stack.Screen name="SignUpAddress" component={SignUpAddress} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
