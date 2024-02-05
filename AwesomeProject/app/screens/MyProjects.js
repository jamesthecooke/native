import React from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native";

function HomePage(props) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: 10,
          paddingTop: 10,
        }}
      >
        <View style={styles.projectContainer}>
          <ImageBackground
            source={require("../assets/background.jpg")}
            style={styles.projectImg}
          ></ImageBackground>
          <View style={styles.project}>
            <Text stle={styles.projectText}>Project 1</Text>
          </View>
        </View>

        <View style={styles.projectContainer}>
          <ImageBackground
            source={require("../assets/background.jpg")}
            style={styles.projectImg}
          ></ImageBackground>
          <View style={styles.project}>
            <Text stle={styles.projectText}>Project 2</Text>
          </View>
        </View>

        <View style={styles.projectContainer}>
          <ImageBackground
            source={require("../assets/background.jpg")}
            style={styles.projectImg}
          ></ImageBackground>
          <View style={styles.project}>
            <Text stle={styles.projectText}>Project 3</Text>
          </View>
        </View>

        <View style={styles.projectContainer}>
          <ImageBackground
            source={require("../assets/background.jpg")}
            style={styles.projectImg}
          ></ImageBackground>
          <View style={styles.project}>
            <Text stle={styles.projectText}>Project 4</Text>
          </View>
        </View>
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
    alignItems: "center",
  },

  projectContainer: {
    width: "85%",
    height: 300,
    borderRadius: 25,
    backgroundColor: "white",
    marginBottom: 20,
    opacity: 0.8,
    justifyContent: "flex-end",
  },

  project: {
    flex: 0.25,
    backgroundColor: "red",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  projectImg: {
    flex: 0.8,
  },
});
