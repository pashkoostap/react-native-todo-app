import React from "react";
import { Picker } from "react-native";

const TodoStatusPicker = ({ input: { onChange, value } }) => (
  <Picker onValueChange={onChange} selectedValue={value}>
    <Picker.Item label="Actual" value="actual" />
    <Picker.Item label="Completed" value="completed" />
  </Picker>
);

export default TodoStatusPicker;
