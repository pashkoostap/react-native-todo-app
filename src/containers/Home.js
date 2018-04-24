import React, { Component } from "react";
import { connect } from "react-redux";
import {
  compose,
  withHandlers,
  setStatic,
  lifecycle,
  withProps
} from "recompose";

import { getTodos, addTodo, deleteTodo } from "../store/actions";
import { mapTodos } from "../models";
import { NEW_TODO } from "../constants/navigation";

import Home from "../components/Home";

const mapStateToProps = ({ todosReducer }) => ({
  todos: mapTodos(todosReducer.todos),
  todosReducer
});

const mapDispatchToProps = dispatch => ({
  getTodos: () => dispatch(getTodos()),
  addTodo: todo => dispatch(addTodo(todo)),
  deleteTodo: id => dispatch(deleteTodo(id))
});

export default compose(
  setStatic("navigationOptions", () => ({ header: null })),
  connect(mapStateToProps, mapDispatchToProps),
  withProps(({ todosReducer: { isTodoUploading, isTodoDeleting } }) => ({
    showLoader: isTodoUploading || isTodoDeleting
  })),
  withHandlers({
    deteleTodo: props => id => {
      props.deleteTodo(id);
    },
    editTodo: props => todo => {
      props.navigation.navigate(NEW_TODO, { todo });
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.getTodos();
    }
  })
)(Home);

console.disableYellowBox = true;
