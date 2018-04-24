import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Field, reduxForm } from "redux-form";

import ObjectId from "../utils/objectId";
import { getTodo } from "../store/selectors";
import Input from "./Input";

const NewTodo = props => {
  console.log(props);
  return (
    <View>
      <Text>New Todo</Text>
      <Field name="todo.title" component={Input} />
      <TouchableOpacity
        onPress={() =>
          props.addTodo({
            id: ObjectId(),
            title: getTodo(props.formValue).title
          })
        }
      >
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default reduxForm({ form: "todo" })(NewTodo);
