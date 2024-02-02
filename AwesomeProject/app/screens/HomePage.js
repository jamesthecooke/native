import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Text } from "react-native";

function HomePage(props) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
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
    alignItems: "center",
  },

  headingContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
    width: "80%",
  },

  pageHeading: {
    fontSize: 15,
    color: "white",
  },
});
