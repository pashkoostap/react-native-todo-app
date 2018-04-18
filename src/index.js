import React from "react";
import { StyleSheet, ScrollView, View, Button } from "react-native";
import { firebaseDB } from "./utils/firebase";

import Todos from "./components/Todos";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: []
    };
  }

  getTodos() {
    firebaseDB.ref("/todos").on("value", data => {
      if (!data) return;
      this.setState(prevState => ({ todos: data.val() }));
    });
  }

  setTodo(todo) {
    firebaseDB.ref("/todos").set([...this.state.todos, todo]);
  }

  componentDidMount() {
    this.getTodos();
  }

  render() {
    const { todos } = this.state;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Todos todos={todos} />

          <Button onPress={() => this.setTodo(new Date())} title="Set todo" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
