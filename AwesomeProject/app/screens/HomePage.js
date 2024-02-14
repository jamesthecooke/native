import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Text } from "react-native";

function HomePage(props) {
  return (
    <ImageBackground
      source={require("../assets/Screenshot 2024-02-14 at 16.49.36.png")}
      style={styles.background}
    >
      <View style={styles.headingContainer}>
        <Text style={styles.pageHeading}>
          Welcome to my first React App where I will demonstrate some of the
          things I have been learning.
        </Text>
      </View>
    </ImageBackground>
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
    top: "25%",
    alignItems: "center",
    flexDirection: "row",
  },

  pageHeading: {
    color: "white",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    margin: 20,
  },
});
