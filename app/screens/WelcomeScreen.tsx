import React from "react";
import {
	View,
	ImageBackground,
	StyleSheet,
	Image,
	Text,
	Pressable,
} from "react-native";
import HomeScreen from "./HomeScreen";

export default function WelcomeScreen({ navigation }) {
	const loginHandler = () => {
		navigation.navigate("Home");
	};

	const registerHandler = () => {
		navigation.navigate("Home");
	};

	return (
		<ImageBackground
			style={styles.background}
			source={require("../assets/background.png")}
		>
			<View style={styles.container}>
				<Image
					style={styles.logo}
					source={require("../assets/adaptive-icon.png")}
				/>
				<Text style={styles.heading}>API Calls App</Text>
			</View>
			<Pressable style={styles.button} onPress={loginHandler}>
				<Text style={styles.text}>Login</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={registerHandler}>
				<Text style={styles.text}>Register</Text>
			</Pressable>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	heading: {
		position: "absolute",
		alignSelf: "center",
		top: 20,
		fontSize: 40,
		color: "#fff",
	},
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		margin: 10,
		borderRadius: 4,
		elevation: 3,
		width: "80%",
		backgroundColor: "#dcd",
		bottom: 40,
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "#272727",
	},
	logo: {
		width: 100,
		height: 100,
		position: "absolute",
		top: 80,
	},
	container: {
		position: "absolute",
		top: 70,
		alignItems: "center",
	},
});
