import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewProps } from "react-native";

import { PRIMARY_COLOR } from "../../assets/styles";

interface IProps extends ViewProps {
  text: string;
  textColor?: string;
  onPress?: () => void;
}

const TextButton: React.FC<IProps> = (props) => {
  const { text, textColor = PRIMARY_COLOR, onPress } = props;

  return (
    <TouchableOpacity style={[styles.button, props.style]} onPress={onPress}>
      <Text style={[{ color: textColor }, styles.text]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
});
