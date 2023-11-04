import { AuthProvider } from "./src/context/AuthContext";

import Layout from "./src/components/Layout";

export default function App() {
	return (
		<AuthProvider>
			<Layout></Layout>
		</AuthProvider>
	);
}
