import React from "react";
import { TextInput } from "react-native";

const Input = ({ input: { onChange, value }, onSubmit }) => {
  return (
    <TextInput
      onChangeText={onChange}
      value={value}
      onSubmitEditing={onSubmit}
    />
  );
};

export default Input;
