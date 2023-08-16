import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

const NewsComponent: React.FC = () => {
	const [newsData, setNewsData] = useState<any[]>([]);
	const apiKey = "65628bdcd1c54c46a827dc64da2a1e08";

	useEffect(() => {
		fetchNews();
	}, []);

	const fetchNews = async () => {
		try {
			const response = await axios.get(
				`https://newsapi.org/v2/top-headlines?sources=bbc-news,the-verge&q=bitcoin&category=business&language=en&country=us&apiKey=${apiKey}`
			);

			setNewsData(response.data.articles);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<View>
			{newsData.length > 0 ? (
				<View>
					{newsData.map((article, index) => (
						<Text key={index} style={styles.text}>
							{article.title}
						</Text>
					))}
				</View>
			) : (
				<Text style={styles.text}>Loading news...</Text>
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

export default NewsComponent;
