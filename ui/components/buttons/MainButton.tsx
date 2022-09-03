import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewProps } from "react-native";
import { PRIMARY_COLOR, WHITE } from "../../assets/styles";

interface IProps extends ViewProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  onPress?: () => void;
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
});

const MainButton: React.FC<IProps> = (props) => {
  const {
    text,
    backgroundColor = PRIMARY_COLOR,
    textColor = WHITE,
    onPress,
  } = props;

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor }, props.style]}
      onPress={onPress}
    >
      <Text style={{ color: textColor }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
