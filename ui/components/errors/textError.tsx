import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { DANGER_COLOR } from "../../assets/styles";

interface IProps {
  text: string;
}

const TextError: React.FC<IProps> = ({ text }) => {
  return (
    <View style={style.container}>
      <Text style={style.errorText}>{text}</Text>
    </View>
  );
};

export default TextError;

const style = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  errorText: {
    color: DANGER_COLOR,
  },
});
