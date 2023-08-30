import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import { WEATHER_API_KEY, city } from "../config/config";

const WeatherComponent = () => {
	const [weatherData, setWeatherData] = useState(null);

	useEffect(() => {
		fetchWeather();
	}, []);

	const fetchWeather = async () => {
		try {
			const response = await axios.get(
				`https://api.api-ninjas.com/v1/weather?city=${city}`,
				{
					headers: { "X-Api-Key": WEATHER_API_KEY },
					responseType: "json",
				}
			);

			setWeatherData(response.data);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<View>
			{weatherData ? (
				<View>
					<Text style={styles.text}>Weather in {city}</Text>
					<Text style={styles.text}>Temperature: {weatherData.temp}°C</Text>
					<Text style={styles.text}>
						Feels Like: {weatherData.feels_like}°C
					</Text>
					{/* Render other weather information */}
				</View>
			) : (
				<Text style={styles.text}>Loading weather data...</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		color: "#fff",
		fontSize: 20,
	},
});

export default WeatherComponent;
