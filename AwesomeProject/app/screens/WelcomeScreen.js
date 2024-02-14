import React from "react";
import { StyleSheet } from "react-native";
import { ImageBackground } from "react-native";
import { View, Button, Image, Text } from "react-native";
import { useNavigation } from "react-native";
import HomePage from "./MyProjects";
function WelcomeScreen({ navigation }) {
  const MyProjects = () => {
    navigation.push("MyProjects");
  };

  const HomePage = () => {
    // navigation.navigate("HomePage");
    navigation.push("HomePage");
  };

  return (
    <ImageBackground
      source={require("../assets/Screenshot 2024-02-14 at 16.49.36.png")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/favicon.png")}
        ></Image>
        <Text style={styles.logoText}>
          This is my first go at React Native. I have decided to put of my
          project and a breif description as content so I can familiarise myself
          with the syntax{" "}
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <Button title="My Projects" color="black" onPress={MyProjects} />
        </View>

        <View style={styles.btn}>
          <Button title="About Me" color="black" onPress={HomePage} />
        </View>
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  btnContainer: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  btn: {
    backgroundColor: "white",
    width: 150,
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: "white",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    margin: 20,
  },
  logoContainer: {
    position: "absolute",
    top: 35,
    alignItems: "center",
  },
});
