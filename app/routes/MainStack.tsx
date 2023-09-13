import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../screens/WelcomeScreen";
import MainScreen from "../screens/MainScreen";

const screens = {
	Welcome: {
		screen: WelcomeScreen,
	},
	Main: {
		screen: MainScreen,
	},
};

const MainStack = createStackNavigator(screens);

export default createAppContainer(MainStack);
