import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Field, reduxForm } from "redux-form";
import { compose, lifecycle } from "recompose";

import { getTodoValue } from "../store/selectors";

import ButtonWithHandler from "./ButtonWithHandler";
import Input from "./Input";

const NewTodo = ({ formValue, saveTodo }) => {
  const title = getTodoValue(formValue).title;

  return (
    <View style={styles.wrapper}>
      <Field
        name="todo.title"
        component={Input}
        onSubmit={() => saveTodo(title)}
      />

      <ButtonWithHandler onPress={() => saveTodo(title)} text="Save" />
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
    }
  })
)(NewTodo);
