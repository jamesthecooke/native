import { StatusBar } from "expo-status-bar";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import HomePage from "./app/screens/HomePage";
import Navigator from "./app/routes/homeStack";
import MyProjects from "./app/screens/MyProjects";

export default function App() {
  return <Navigator />;
}
