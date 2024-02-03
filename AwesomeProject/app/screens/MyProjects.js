import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Text } from "react-native";

function HomePage(props) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    ></ImageBackground>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex",
  },

  headingContainer: {
    position: "absolute",
    top: "50%",
    alignItems: "center",
    flexDirection: "row",
    // width: "80%",
    backgroundColor: "black",
    opacity: 0.7,
    borderRadius: 15,
    left: "3%",
  },

  pageHeading: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
