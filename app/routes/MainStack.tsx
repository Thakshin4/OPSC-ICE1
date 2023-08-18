import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";

const screens = {
	Welcome: {
		screen: WelcomeScreen,
	},
	Home: {
		screen: HomeScreen,
	},
};

const MainStack = createStackNavigator(screens);

export default createAppContainer(MainStack);
