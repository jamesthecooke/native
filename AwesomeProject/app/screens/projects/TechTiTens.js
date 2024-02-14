import React from "react";
import { ImageBackground, Text, StyleSheet, View, Image } from "react-native";

function TechTiTens(props) {
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
          source={require("../../assets/background.jpg")}
          style={styles.projectImg}
        ></Image>
      </ImageBackground>
      <View style={styles.pageBody}>
        <Text style={styles.descriptionText}>
          Harvest Hub my awsome 4 week project that was worked on in a team of
          6. this is place holder text and will be much mich better formatted
          than this teheeh
        </Text>
      </View>
    </ImageBackground>
  );
}

export default TechTiTens;

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
