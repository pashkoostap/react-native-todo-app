import React from "react";
import { compose, setStatic, withHandlers } from "recompose";
import { connect } from "react-redux";
import { getTodos, addTodo, deleteTodo } from "../store/actions";
import ObjectId from "../utils/objectId";

import TodoModal from "../components/TodoModal";

const mapStateToProps = ({ form, todosReducer }) => ({
  formValue: form,
  todosReducer
});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  deleteTodo: id => dispatch(deleteTodo(id))
});

export default compose(
  setStatic("navigationOptions", { headerTitle: "Add new todo" }),
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    saveTodo: props => todo => {
      if (todo.title) {
        props.addTodo(todo);
      } else {
        alert("Title is not valid");
      }
    }
  })
)(TodoModal);
