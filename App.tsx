import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Button, Alert, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Navigator from "./app/routes/MainStack";

export default function App() {
	return <Navigator />;
}
