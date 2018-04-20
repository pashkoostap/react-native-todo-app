import React from "react";
import { View } from "react-native";

import Todo from "./Todo";

const Todos = ({ todos = [], deleteTodo }) => (
  <View>
    {todos.map(todo => (
      <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} />
    ))}
  </View>
);

export default Todos;
