import React from "react";
import { compose, setStatic } from "recompose";
import { connect } from "react-redux";
import { getTodos, addTodo, deleteTodo } from "../store/actions";

import NewTodo from "../components/NewTodo";

const mapStateToProps = ({ form, todosReducers }) => ({
  formValue: form,
  todosReducers
});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  deleteTodo: id => dispatch(deleteTodo(id))
});

export default compose(
  setStatic("navigationOptions", { headerTitle: "Add new todo" }),
  connect(mapStateToProps, mapDispatchToProps)
)(NewTodo);
