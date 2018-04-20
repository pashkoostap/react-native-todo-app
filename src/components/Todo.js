import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Todo = ({ todo, deleteTodo }) => (
  <TouchableOpacity
    onPress={() => deleteTodo(todo.id)}
    style={styles.itemWrapper}
  >
    <Text>{todo.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f2f2f2",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    padding: 20
  }
});

export default Todo;
