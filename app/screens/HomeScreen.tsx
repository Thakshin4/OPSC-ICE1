import React from "react";
import { Text, View, StyleSheet } from "react-native";
import WeatherComponent from "../components/WeatherComponent";
import ExchangeRateComponent from "../components/ExchangeRateComponent";
import NewsComponent from "../components/NewsComponent";

// Main
function HomeScreen() {
	return (
		<View style={{ backgroundColor: "#272727", flex: 1 }}>
			<Text style={styles.heading}>Home</Text>
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
	);
}

const styles = StyleSheet.create({
	heading: {
		position: "absolute",
		alignSelf: "center",
		top: 80,
		fontSize: 40,
		color: "#fff",
	},
	weather: {
		position: "absolute",
		alignSelf: "center",
		top: 200,
	},
	rate: {
		position: "absolute",
		alignSelf: "center",
		top: 340,
	},
	news: {
		position: "absolute",
		alignSelf: "center",
		top: 440,
	},
});

export default HomeScreen;
