import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Todo = ({ todo, deleteTodo }) => (
  <View>
    <Text>{todo.title}</Text>

    <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
      <Text>Delete todo</Text>
    </TouchableOpacity>
  </View>
);

export default Todo;
