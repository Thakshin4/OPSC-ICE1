import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

// const ExchangeRateComponent = (currencyFrom, currencyTo) => {
const ExchangeRateComponent = () => {
	const [exchangeRateData, setExchangeRateData] = useState(null);

	useEffect(() => {
		fetchExchangeRate();
	}, []);

	const fetchExchangeRate = async () => {
		try {
			const response = await axios.get(
				// `https://api.api-ninjas.com/v1/exchangerate?pair=${currencyFrom}_${currencyTo}`,
				`https://api.api-ninjas.com/v1/exchangerate?pair=ZAR_USD`,
				{
					headers: { "X-Api-Key": "WVq1W1+NoQ08KSoMK/nmlQ==2OaG3uWJJOm5uXdB" },
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
						1 ZAR = {exchangeRateData.exchange_rate} USD
					</Text>

					{/* Render other exchange rate information */}
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
