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
          source={require("../../assets/Screenshot 2024-02-14 at 16.30.04.png")}
          style={styles.projectImg}
        ></Image>
      </ImageBackground>
      <View style={styles.pageBody}>
        <Text style={styles.descriptionText}>
          Tech TiTens is a project that I developed with a team of 5 other
          students. We were trying to build a platform that would help students
          to revise topics they are struggling with whilst on the go. We used
          our combined knowledge to achive this.
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
