import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Field, reduxForm } from "redux-form";
import { compose, setStatic, lifecycle, withProps } from "recompose";

import { getTodoValue } from "../store/selectors";
import { getParamsFromNavigationState } from "../models";
import ObjectId from "../utils/objectId";
import I18n from "../localization";

import ButtonWithHandler from "./ButtonWithHandler";
import Input from "./Input";
import TodoStatusPicker from "./TodoStatusPicker";

const TodoModal = ({ formValue, saveTodo, navigation }) => {
  const initTodo = getParamsFromNavigationState(navigation, "todo");
  const todoFromStore = getTodoValue(formValue);
  const todo = {
    id: initTodo.id || ObjectId(),
    title: todoFromStore.title,
    status: todoFromStore.status || "actual"
  };

  return (
    <View style={styles.wrapper}>
      <Field name="todo.title" component={Input} />

      <View style={styles.formField}>
        <Text>{I18n.t("todoModal.selectStatusLabel")}</Text>
        <Field name="todo.status" component={TodoStatusPicker} />
      </View>

      <ButtonWithHandler
        onPress={() => saveTodo(todo)}
        text={I18n.t("todoModal.saveButtonText")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 20
  },
  formField: {
    paddingTop: 20,
    paddingBottom: 20
  }
});

export default compose(
  withProps(({ navigation }) => {
    const initTodo = getParamsFromNavigationState(navigation, "todo");

    return {
      initialValues: { todo: { ...initTodo } },
      navigation
    };
  }),
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
)(TodoModal);
