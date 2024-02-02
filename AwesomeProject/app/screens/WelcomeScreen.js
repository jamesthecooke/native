import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imgPlaceholder} />

      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <Button
            title="first btn"
            color="black"
            onPress={() => alert("First btn press")}
          />
        </View>

        <View style={styles.btn}>
          <Button
            title="second btn"
            color="black"
            onPress={() => alert("Second btn press")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgPlaceholder: {
    flex: 3,
    backgroundColor: "blue",
  },
  btnContainer: {
    flex: 0.5,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "red",
    width: 150,
    height: 50,
    borderRadius: 100,
  },
});

export default WelcomeScreen;
