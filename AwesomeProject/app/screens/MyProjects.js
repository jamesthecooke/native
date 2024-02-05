import React from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native";

function HomePage(props) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <ScrollView>
        <View style={styles.projectContainer} />
        <View style={styles.projectContainer} />
        <View style={styles.projectContainer} />
        <View style={styles.projectContainer} />
      </ScrollView>
    </ImageBackground>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  scrollViewContent: {
    paddingTop: 30,
    paddingBottom: 30,
    alignItems: "center",
    flexGrow: 1,
  },
  projectContainer: {
    width: "85%",
    height: 300,
    borderRadius: 25,
    backgroundColor: "white",
    marginBottom: 20,
  },
});
