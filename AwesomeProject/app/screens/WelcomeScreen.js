import React from "react";
import { StyleSheet } from "react-native";
import { ImageBackground } from "react-native";
import { View, Button, Image, Text } from "react-native";
import { useNavigation } from "react-native";
function WelcomeScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("HomePage");
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
          <Button
            title="first btn"
            color="black"
            onPress={() => alert("First btn press")}
          />
        </View>

        <View style={styles.btn}>
          <Button title="second btn" color="black" onPress={pressHandler} />
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
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    opacity: 0.5,
    borderRadius: 50,
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
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});
