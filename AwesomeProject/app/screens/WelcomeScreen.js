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
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/favicon.png")}
        ></Image>
        <Text style={styles.logoText}>This is my awsome new app</Text>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <Button title="My Projects" color="black" onPress={MyProjects} />
        </View>

        <View style={styles.btn}>
          <Button title="About this App" color="black" onPress={HomePage} />
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
  },
  logoContainer: {
    position: "absolute",
    top: 35,
    alignItems: "center",
  },
});
