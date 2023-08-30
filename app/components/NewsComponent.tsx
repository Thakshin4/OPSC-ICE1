import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
	NativeBaseProvider,
	FlatList,
	ScrollView,
	Divider,
	Image,
	Spinner,
} from "native-base";

import { services } from "../services/services";
import moment from "moment";

const NewsComponent: React.FC = () => {
	const [newsData, setNewsData] = useState([]);
	useEffect(() => {
		services("general")
			.then((data) => {
				setNewsData(data);
			})
			.catch((error) => {
				alert(error);
			});
	}, []);

	return (
		<NativeBaseProvider>
			<ScrollView height={850}>
				{newsData.length > 1 ? (
					<FlatList
						data={newsData}
						renderItem={({ item }) => (
							<View>
								<View style={styles.newsContainer}>
									<Image
										width={550}
										height={250}
										resizeMode={"cover"}
										source={{
											uri: item.urlToImage,
										}}
										alt="Alternate Text"
									/>
									<Text style={styles.title}>{item.title}</Text>
									<Text style={styles.date}>
										{moment(item.publishedAt).format("LLL")}
									</Text>
									<Text style={styles.newsDescription}>{item.description}</Text>
								</View>
								<Divider my={2} bg="#e0e0e0" />
							</View>
						)}
						keyExtractor={(item) => item.id}
					/>
				) : (
					<View style={styles.spinner}>
						<Spinner color="danger.400" />
					</View>
				)}
			</ScrollView>
		</NativeBaseProvider>
	);
};

const styles = StyleSheet.create({
	newsContainer: {
		padding: 10,
		backgroundColor: "#272727",
	},
	title: {
		fontSize: 18,
		marginTop: 10,
		fontWeight: "600",
		color: "#fff",
	},
	newsDescription: {
		fontSize: 16,
		marginTop: 10,
		color: "#fff",
	},
	date: {
		fontSize: 14,
		color: "#fff",
	},
});

export default NewsComponent;
