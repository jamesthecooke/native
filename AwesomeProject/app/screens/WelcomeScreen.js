import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function WelcomeScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "blue", flex: 3 }} />

      <View
        style={{
          backgroundColor: "white",
          flex: 0.5,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "red",
            width: 150,
            height: 50,
            borderRadius: 100,
          }}
        >
          <Button
            title="first btn"
            color="black"
            onPress={() => alert("First btn press")}
          />
        </View>

        <View
          style={{
            backgroundColor: "red",
            width: 150,
            height: 50,
            borderRadius: 100,
          }}
        >
          <Button
            title="second btn"
            color="black"
            borderRadius="100"
            onPress={() => alert("Second btn press")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default WelcomeScreen;
