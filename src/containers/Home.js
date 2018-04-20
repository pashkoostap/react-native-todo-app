import React, { Component } from "react";
import { connect } from "react-redux";

import { getTodos } from "../store/actions/todos";
import { mapTodos } from "../models";

import Home from "../components/Home";

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "dasdas",
    header: false
  });

  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return <Home todos={this.props.todos} />;
  }
}

const mapStateToProps = ({ todosReducer }) => ({
  todos: mapTodos(todosReducer.todos)
});

const mapDispatchToProps = dispatch => ({
  getTodos: () => dispatch(getTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
