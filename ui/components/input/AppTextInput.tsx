import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

import { BORDER_LIGHT, TEXT_LIGHT } from "../../assets/styles";

interface IProps extends TextInputProps {
  text?: string;
}

const AppTextInput: React.FC<IProps> = (props) => {
  return (
    <TextInput
      {...props}
      placeholderTextColor={
        props.placeholderTextColor ? props.placeholderTextColor : TEXT_LIGHT
      }
      style={[styles.input, props.style]}
    />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  input: {
    borderColor: BORDER_LIGHT,
    borderWidth: 1,
    width: "100%",
    padding: 20,
    borderRadius: 15,
  },
});
