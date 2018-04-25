import React from "react";
import { Text, StyleSheet } from "react-native";

const WarningText = ({ text }) => <Text style={styles.textStyles}>{text}</Text>;

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 20,
    padding: 20,
    textAlign: "center"
  }
});

export default WarningText;
