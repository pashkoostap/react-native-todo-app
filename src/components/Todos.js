import React from "react";
import { View } from "react-native";

import Todo from "./Todo";

const Todos = ({ todos = [] }) => (
  <View>{todos.map((todo, i) => <Todo title={todo.title} key={i} />)}</View>
);

export default Todos;
