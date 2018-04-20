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

const Home = ({ todos, addTodo, deleteTodo, showLoader }) => (
  <View style={styles.container}>
    <ScrollView>
      {todos.length ? (
        <Todos todos={todos} deleteTodo={deleteTodo} />
      ) : (
        <Text style={styles.noTodosText}>{noTodosYetText}</Text>
      )}

      <View style={styles.addTodoWrapper}>
        <TouchableOpacity
          style={styles.addTodoButton}
          onPress={() =>
            addTodo({ id: ObjectId(), title: new Date().toString() })
          }
        >
          <Text style={styles.addTodoButtonText}>Add new todo</Text>
        </TouchableOpacity>

        {showLoader && <ActivityIndicator animating size="large" />}
      </View>
    </ScrollView>
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
    textAlign: "center"
  },
  addTodoWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  addTodoButton: {
    flex: 1,
    alignItems: "center",
    marginRight: 10
  },
  addTodoButtonText: {
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#ccc",
    borderRadius: 50,
    marginTop: 10
  }
});

export default Home;
