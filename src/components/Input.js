import React from "react";
import { TextInput } from "react-native";

const Input = ({ input: { onChange, value } }) => {
  return <TextInput onChangeText={onChange} value={value} />;
};

export default Input;
