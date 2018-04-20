import React, { Component } from "react";
import { connect } from "react-redux";

import { getTodos, addTodo, deleteTodo } from "../store/actions";
import { mapTodos } from "../models";

import Home from "../components/Home";

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Home screen"
  });

  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return (
      <Home
        todos={this.props.todos}
        addTodo={this.props.addTodo}
        deleteTodo={this.props.deleteTodo}
      />
    );
  }
}

const mapStateToProps = ({ todosReducer }) => ({
  todos: mapTodos(todosReducer.todos)
});

const mapDispatchToProps = dispatch => ({
  getTodos: () => dispatch(getTodos()),
  addTodo: todo => dispatch(addTodo(todo)),
  deleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
