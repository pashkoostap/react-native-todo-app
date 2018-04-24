import React from "react";
import { FlatList, RefreshControl, StyleSheet } from "react-native";

import Todo from "./Todo";

const Todos = ({ todos = [], deleteTodo, editTodo }) => (
  <FlatList
    style={styles.listWrapper}
    data={todos}
    renderItem={({ item }) => (
      <Todo todo={item} deleteTodo={deleteTodo} editTodo={editTodo} />
    )}
    keyExtractor={item => item.id}
  />
);

const styles = StyleSheet.create({
  listWrapper: {
    width: "100%"
  }
});

export default Todos;
