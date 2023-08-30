import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import { RATE_API_KEY, currencyFrom, currencyTo } from "../config/config";

// const ExchangeRateComponent = (currencyFrom, currencyTo) => {
const ExchangeRateComponent = () => {
	const [exchangeRateData, setExchangeRateData] = useState(null);

	useEffect(() => {
		fetchExchangeRate();
	}, []);

	const fetchExchangeRate = async () => {
		try {
			const response = await axios.get(
				`https://api.api-ninjas.com/v1/exchangerate?pair=${currencyFrom}_${currencyTo}`,
				{
					headers: { "X-Api-Key": RATE_API_KEY },
					responseType: "json",
				}
			);

			setExchangeRateData(response.data);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<View>
			{exchangeRateData ? (
				<View>
					<Text style={styles.text}>Exchange Rate:</Text>
					<Text style={styles.text}>
						1 USD = {exchangeRateData.exchange_rate} ZAR
					</Text>
				</View>
			) : (
				<Text style={styles.text}>Loading exchange rate data...</Text>
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

export default ExchangeRateComponent;
