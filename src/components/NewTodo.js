import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Field, reduxForm } from "redux-form";

import ObjectId from "../utils/objectId";
import { getTodoValue } from "../store/selectors";

import ButtonWithHandler from "./ButtonWithHandler";
import Input from "./Input";

class NewTodo extends Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
  }

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

  addTodo() {
    const title = getTodoValue(this.props.formValue).title;

    if (title) {
      this.props.addTodo({
        id: ObjectId(),
        title
      });
    } else {
      alert("Title is not valid");
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Field name="todo.title" component={Input} />

        <ButtonWithHandler onPress={this.addTodo} text="Save" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20
  }
});

export default reduxForm({ form: "todo" })(NewTodo);
