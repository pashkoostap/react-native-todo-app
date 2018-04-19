import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Home = () => (
  <View style={styles.container}>
    <Text>Home view</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});

export default Home;
