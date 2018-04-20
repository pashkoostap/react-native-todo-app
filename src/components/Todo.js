import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Todo = ({ todo, deleteTodo }) => (
  <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
    <Text>{todo.title}</Text>
  </TouchableOpacity>
);

export default Todo;
