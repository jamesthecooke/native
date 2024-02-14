import React from "react";
import {
  Button,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "react-native";
import TechTiTens from "./projects/TechTiTens";

function HomePage({ navigation }) {
  const TechTiTens = () => {
    navigation.push("TechTiTens");
  };

  const Pong = () => {
    navigation.push("Pong");
  };

  const HarvestHub = () => {
    navigation.push("HarvestHub");
  };

  return (
    <ImageBackground
      source={require("../assets/Screenshot 2024-02-14 at 16.49.36.png")}
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
            source={require("../assets/Cream-logo.png")}
            style={styles.projectImg}
          ></ImageBackground>
          <View style={styles.project}>
            <Button title="Harvest Hub" color="black" onPress={HarvestHub} />
          </View>
        </View>

        <View style={styles.projectContainer}>
          <ImageBackground
            source={require("../assets/Screenshot 2024-02-14 at 16.42.20.png")}
            style={styles.projectImg}
          ></ImageBackground>
          <View style={styles.project}>
            <Button title="Pong" color="black" onPress={Pong} />
          </View>
        </View>

        <View style={styles.projectContainer}>
          <ImageBackground
            source={require("../assets/Screenshot 2024-02-14 at 16.30.04.png")}
            style={styles.projectImg}
          ></ImageBackground>
          <View style={styles.project}>
            <Button title="TechTiTens" color="black" onPress={TechTiTens} />
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
    opacity: 0.9,
    justifyContent: "flex-end",
  },

  project: {
    flex: 0.25,
    backgroundColor: "white",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  projectImg: {
    flex: 1,
    overflow: "hidden",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    resizeMode: "contain",
  },
});
