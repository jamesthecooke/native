import React from "react";
import { ImageBackground, Text, StyleSheet, View, Image } from "react-native";

function Pong(props) {
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
          source={require("../../assets/Screenshot 2024-02-14 at 16.42.20.png")}
          style={styles.projectImg}
        ></Image>
      </ImageBackground>
      <View style={styles.pageBody}>
        <Text style={styles.descriptionText}>
          Pong was the first little game I developed. I used the language Lua
          and the framework _Love2D_ to create it. It was a fun little project
          and I learned a lot from it. I learned about the game loop, collision
          detection, and how to handle user input. I also learned about the
          importance of game design and how to make a game fun to play. I am
          proud of this project because it was the first game I ever made and it
          was a great learning experience. I hope to make more games in the
          future and continue to improve my skills.
        </Text>
      </View>
    </ImageBackground>
  );
}

export default Pong;

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
