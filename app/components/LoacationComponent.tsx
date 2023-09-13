import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	PermissionsAndroid,
	Platform,
	StyleSheet,
} from "react-native";
import Geolocation from "react-native-geolocation-service";

const HomeScreen: React.FC = () => {
	const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

	useEffect(() => {
		if (Platform.OS === "android") {
			// Request location permissions for Android
			const requestLocationPermission = async () => {
				try {
					const granted = await PermissionsAndroid.request(
						PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
						{
							title: "Location Permission",
							message:
								"This app needs access to your location for weather information.",
							buttonNeutral: "Ask Me Later",
							buttonNegative: "Cancel",
							buttonPositive: "OK",
						}
					);
					if (granted === PermissionsAndroid.RESULTS.GRANTED) {
						// Permission granted, get the current location
						Geolocation.getCurrentPosition(
							(position) => {
								const { latitude, longitude } = position.coords;
								setLocation({ latitude, longitude });
							},
							(error) => {
								console.error("Error getting location:", error);
							},
							{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
						);
					} else {
						console.log("Location permission denied");
					}
				} catch (err) {
					console.warn(err);
				}
			};

			requestLocationPermission();
		}
	}, []);

	return (
		<View>
			{/* Other content */}
			<Text style={styles.text}>Latitude: {location.latitude}</Text>
			<Text style={styles.text}>Longitude: {location.longitude}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		color: "#fff",
		fontSize: 20,
	},
});

export default HomeScreen;
