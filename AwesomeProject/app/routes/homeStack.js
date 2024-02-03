import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomePage from "../screens/HomePage";
import MyProjects from "../screens/MyProjects";

const screens = {
  Home: {
    screen: WelcomeScreen,
  },
  HomePage: {
    screen: HomePage,
  },
  MyProjects: {
    screen: MyProjects,
  },
};

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);
