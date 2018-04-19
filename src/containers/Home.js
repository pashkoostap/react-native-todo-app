import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import { getTodos } from "../store/actions/todos";

import Todos from "../components/Todos";

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "dasdas",
    header: false
  });

  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Todos todos={this.props.todos} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = ({ todosReducer }) => ({
  todos: todosReducer.todos
});

const mapDispatchToProps = dispatch => ({
  getTodos: () => dispatch(getTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
