import React from "react";
import { FlatList, RefreshControl } from "react-native";

import Todo from "./Todo";

const Todos = ({ todos = [], deleteTodo }) => (
  <FlatList
    data={todos}
    renderItem={({ item }) => <Todo todo={item} deleteTodo={deleteTodo} />}
    keyExtractor={item => item.id}
  />
);

export default Todos;
