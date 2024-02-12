import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomePage from "../screens/HomePage";
import MyProjects from "../screens/MyProjects";
import HarvestHub from "../screens/projects/HarvestHub";
import Pong from "../screens/projects/Pong";
import TechTiTens from "../screens/projects/TechTiTens";

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
  HarvestHub: {
    screen: HarvestHub,
  },
  Pong: {
    screen: Pong,
  },
  TechTiTens: {
    screen: TechTiTens,
  },
};

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);
