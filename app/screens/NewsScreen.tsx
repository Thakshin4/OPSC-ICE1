import React from "react";
import { Text, View, StyleSheet } from "react-native";
import NewsComponent from "../components/NewsComponent";

// Main
function NewsScreen() {
	return <NewsComponent />;
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

export default NewsScreen;
