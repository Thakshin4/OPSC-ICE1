import React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";

export default function WelcomeScreen({ navigation }) {
	const loginHandler = () => {
		navigation.navigate("Main");
	};

	const registerHandler = () => {
		navigation.navigate("Main");
	};

	return (
		<View>
			<View style={styles.container}>
				<Image style={styles.logo} source={require("../assets/logo.png")} />
				<Text style={styles.heading}>Bigger Picture News</Text>
			</View>
			<Pressable style={styles.button} onPress={loginHandler}>
				<Text style={styles.text}>Login</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={registerHandler}>
				<Text style={styles.text}>Register</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	heading: {
		position: "absolute",
		alignSelf: "center",
		top: 20,
		fontSize: 40,
		color: "#272727",
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
		elevation: 0,
		width: "80%",
		backgroundColor: "#dcd",
		top: 680,
		alignSelf: "center",
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
		position: "relative",
		top: 70,
		alignItems: "center",
		backgroundColor: "#272727",
	},
});
