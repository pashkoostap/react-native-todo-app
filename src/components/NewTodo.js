import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Field, reduxForm } from "redux-form";

import ObjectId from "../utils/objectId";
import { getTodo } from "../store/selectors";

import ButtonWithHandler from "./ButtonWithHandler";
import Input from "./Input";

class NewTodo extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }
  render() {
    const { formValue, addTodo } = this.props;

    return (
      <View style={styles.wrapper}>
        <Field name="todo.title" component={Input} />

        <ButtonWithHandler
          onPress={() =>
            addTodo({
              id: ObjectId(),
              title: getTodo(formValue).title
            })
          }
          text="Save"
        />
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
