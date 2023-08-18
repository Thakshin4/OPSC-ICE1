import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import WeatherComponent from "../components/WeatherComponent";
import ExchangeRateComponent from "../components/ExchangeRateComponent";
import NewsComponent from "../components/NewsComponent";

// Main
function HomeScreen() {
	return (
		<ImageBackground
			style={styles.background}
			source={require("../assets/background.png")}
		>
			<View style={styles.container}>
				<View style={styles.rate}>
					{<ExchangeRateComponent />}
					{/* {<ExchangeRateComponent currencyFrom="ZAR" currencyTo="USD" /> */}
				</View>
				<View style={styles.news}>
					<NewsComponent />
				</View>
				<View style={styles.weather}>
					<WeatherComponent city="Durban" />
				</View>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	weather: {
		position: "absolute",
		alignSelf: "center",
		top: 100,
		backgroundColor: "#272727",
		color: "#fff",
		padding: 20,
		borderRadius: 10,
	},
	rate: {
		position: "absolute",
		alignSelf: "center",
		top: 240,
		backgroundColor: "#272727",
		color: "#fff",
		padding: 20,
		borderRadius: 10,
	},
	news: {
		position: "absolute",
		alignSelf: "center",
		top: 360,
		backgroundColor: "#272727",
		color: "#fff",
		padding: 20,
		borderRadius: 10,
	},
	container: {
		position: "absolute",
		top: 70,
		alignItems: "center",
		width: "100%",
		backgroundColor: "#272727",
		color: "#fff",
	},
});

export default HomeScreen;
