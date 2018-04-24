import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Field, reduxForm } from "redux-form";
import { compose, lifecycle } from "recompose";

import { getTodoValue } from "../store/selectors";
import ObjectId from "../utils/objectId";

import ButtonWithHandler from "./ButtonWithHandler";
import Input from "./Input";

const NewTodo = ({ formValue, saveTodo }) => {
  const { title } = getTodoValue(formValue);
  const todo = { id: ObjectId(), title };

  return (
    <View style={styles.wrapper}>
      <Field
        name="todo.title"
        component={Input}
        onSubmit={() => saveTodo(todo)}
      />

      <ButtonWithHandler onPress={() => saveTodo(todo)} text="Save" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 20
  }
});

export default compose(
  reduxForm({ form: "todo" }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      const {
        todosReducer: { isTodoUploaded, isTodoDeleted },
        navigation: { goBack }
      } = nextProps;
      const { todosReducer } = this.props;

      if (
        (isTodoUploaded && todosReducer.isTodoUploaded !== isTodoUploaded) ||
        (isTodoDeleted && todosReducer.isTodoDeleted !== isTodoDeleted)
      ) {
        goBack();
      }
    },
    componentDidMount() {
      const {
        navigation: {
          state: { params }
        }
      } = this.props;
      console.log(params);
    }
  })
)(NewTodo);
