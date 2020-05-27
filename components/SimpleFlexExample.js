import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function SimpleFlexExample() {
  return (
    <View style={styles.screen}>
      <View style={styles.red}>
        <Text>1</Text>
      </View>
      <View style={styles.blue}>
        <Text>2</Text>
      </View>
      <View style={styles.green}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    flexDirection: "column",
    alignItems: "center",
  },
  red: {
    backgroundColor: "red",
    width: 200,
    height: 200,
  },
  blue: {
    backgroundColor: "blue",
    width: 200,
    height: 200,
  },
  green: {
    backgroundColor: "green",
    width: 200,
    height: 200,
  },
});
