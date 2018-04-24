import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonWithHandler = ({ onPress, text }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    marginRight: 10
  },
  buttonText: {
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#ccc",
    borderRadius: 50
  }
});

export default ButtonWithHandler;
