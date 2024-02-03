import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import HomePage from "./app/screens/HomePage";
import Navigator from "./app/routes/homeStack";

export default function App() {
  return <Navigator />;
}
