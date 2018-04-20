import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import { noTodosYetText } from "../constants/messages";
import Todos from "./Todos";

const Home = ({ todos }) => (
  <View style={styles.container}>
    <ScrollView>
      {todos.length ? <Todos todos={todos} /> : <Text>{noTodosYetText}</Text>}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Home;
