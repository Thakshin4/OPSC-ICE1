import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import NewsScreen from "./NewsScreen";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

// Main
function MainScreen() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen
					name="Home"
					component={HomeScreen}
					options={{
						tabBarIcon: (props) => (
							<Icon type="feather" name="home" color={props.color} />
						),
					}}
				/>
				<Tab.Screen
					name="News"
					component={NewsScreen}
					options={{
						tabBarIcon: (props) => (
							<Icon type="feather" name="layout" color={props.color} />
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
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

export default MainScreen;
