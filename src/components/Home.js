import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { noTodosYetText } from "../constants/messages";
import ObjectId from "../utils/objectId";

import Todos from "./Todos";

const Home = ({ todos, addTodo }) => (
  <View style={styles.container}>
    <ScrollView>
      {todos.length ? <Todos todos={todos} /> : <Text>{noTodosYetText}</Text>}

      <TouchableOpacity
        onPress={() =>
          addTodo({ id: ObjectId(), title: new Date().toString() })
        }
      >
        <Text>Add new todo</Text>
      </TouchableOpacity>
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
