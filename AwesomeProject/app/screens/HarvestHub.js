import React from "react";
import { ImageBackground, Text, StyleSheet, View, Image } from "react-native";

function HarvestHub(props) {
  return (
    <ImageBackground style={styles.background}>
      <View style={styles.projectImgContainer}>
        <Image
          source={require("../assets/background.jpg")}
          style={styles.projectImg}
        ></Image>
      </View>
    </ImageBackground>
  );
}

export default HarvestHub;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex",
    backgroundColor: "black",
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
  },
});
// comment added
