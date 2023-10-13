import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./src/screens/Welcome";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Home" component={Home} />
				{/* <Stack.Screen name="Welcome" component={Welcome} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Home" component={Home} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
