import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./src/screens/Welcome";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Investment from "./src/screens/Investment";
import Loan from "./src/screens/Loan";
import Transaction from "./src/screens/Transaction";
import CreateAccountHome from "./src/screens/SignUpHome";

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
				<Stack.Screen name="CreateAccountHome" component={CreateAccountHome} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
