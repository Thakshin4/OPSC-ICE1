import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text } from "react-native";

function WelcomeScreen(props) {
	return (
		<ImageBackground
			style={styles.background}
			source={require("../assets/background.jpg")}
		>
			<View style={styles.container}>
				<Image
					style={styles.logo}
					source={require("../assets/adaptive-icon.png")}
				/>
				<Text style={styles.heading}>API Calls App</Text>
			</View>
			<View style={styles.button}></View>
			<View style={styles.button}></View>
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
		width: "100%",
		height: 70,
		backgroundColor: "#272727",
		color: "#fff",
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

export default WelcomeScreen;
