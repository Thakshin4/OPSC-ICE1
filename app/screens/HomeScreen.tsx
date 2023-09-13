import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import WeatherComponent from "../components/WeatherComponent";
import ExchangeRateComponent from "../components/ExchangeRateComponent";
import NewsComponent from "../components/NewsComponent";
import LocationComponent from "../components/LoacationComponent";

// Main
function HomeScreen() {
	return (
		<View>
			<View style={styles.container}>
				<View style={styles.weather}>
					<WeatherComponent />
				</View>
				<View style={styles.rate}>
					{<ExchangeRateComponent />}
					{/* {<ExchangeRateComponent currencyFrom="ZAR" currencyTo="USD" /> */}
				</View>
				<View style={styles.location}>
					{<LocationComponent />}
					{/* {<ExchangeRateComponent currencyFrom="ZAR" currencyTo="USD" /> */}
				</View>
			</View>
		</View>
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
		backgroundColor: "#272727",
		color: "#fff",
		padding: 20,
		borderRadius: 10,
		width: 400,
	},
	rate: {
		position: "absolute",
		alignSelf: "center",
		top: 120,
		backgroundColor: "#272727",
		color: "#fff",
		padding: 20,
		borderRadius: 10,
		width: 400,
	},
	location: {
		position: "absolute",
		alignSelf: "center",
		top: 220,
		backgroundColor: "#272727",
		color: "#fff",
		padding: 20,
		borderRadius: 10,
		width: 400,
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
