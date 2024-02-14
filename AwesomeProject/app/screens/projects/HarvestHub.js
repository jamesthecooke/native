import React from "react";
import { ImageBackground, Text, StyleSheet, View, Image } from "react-native";

function HarvestHub(props) {
  return (
    <ImageBackground
      source={require("../../assets/Screenshot 2024-02-14 at 16.49.36.png")}
      style={styles.background}
    >
      <ImageBackground
        source={require("../../assets/Screenshot 2024-02-14 at 16.49.36.png")}
        style={styles.projectImgContainer}
      >
        <Image
          source={require("../../assets/Cream-logo.png")}
          style={styles.projectImg}
        ></Image>
      </ImageBackground>
      <View style={styles.pageBody}>
        <Text style={styles.descriptionText}>
          Harvest Hub was a team project that I worked on with 5 others. We
          built a website for people to learn about growing veggies. They could
          add tips and tricks share their learnigs.
        </Text>
      </View>
    </ImageBackground>
  );
}

export default HarvestHub;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex",
    backgroundColor: "white",
  },

  projectImgContainer: {
    flex: 0.35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  projectImg: {
    flex: 1,
    width: "85%",
    height: "100%",
    borderRadius: 20,
    marginTop: 20,
  },

  pageBody: {
    flex: 0.65,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },

  descriptionText: {
    color: "white",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    margin: 20,
  },
});
// comment added
