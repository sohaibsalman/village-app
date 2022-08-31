import React from "react";
import { TextInput, StyleSheet, TextProps, TextInputProps } from "react-native";

import { BORDER_LIGHT } from "../../assets/styles";

interface IProps extends TextInputProps {
  text?: string;
}

const styles = StyleSheet.create({
  input: {
    borderColor: BORDER_LIGHT,
    borderWidth: 1,
    width: "100%",
    padding: 20,
    borderRadius: 15,
  },
});

const CustomTextInput: React.FC<IProps> = (props) => {
  return <TextInput {...props} style={[styles.input, props.style]} />;
};

export default CustomTextInput;
