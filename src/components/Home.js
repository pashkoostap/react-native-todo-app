import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from "react-native";

import { noTodosYetText } from "../constants/messages";
import ObjectId from "../utils/objectId";

import Todos from "./Todos";
import ButtonWithHandler from "./ButtonWithHandler";

const Home = ({
  todos,
  getTodos,
  addTodo,
  deleteTodo,
  showLoader,
  navigation
}) => (
  <View style={styles.container}>
    <View style={styles.addTodoWrapper}>
      <ButtonWithHandler
        onPress={() => navigation.navigate("NewTodo")}
        text="Add new todo"
      />

      {showLoader && <ActivityIndicator animating size="large" />}
    </View>

    {todos.length ? (
      <Todos todos={todos} getTodos={getTodos} deleteTodo={deleteTodo} />
    ) : (
      <Text style={styles.noTodosText}>{noTodosYetText}</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20
  },
  noTodosText: {
    fontSize: 20,
    padding: 20,
    textAlign: "center"
  },
  addTodoWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 20
  }
});

export default Home;
