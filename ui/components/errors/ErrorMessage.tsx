import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { DANGER_BG, DANGER_COLOR } from "../../assets/styles";

interface IProps {
  errors: string[];
}

const ErrorMessage: React.FC<IProps> = ({ errors }) => {
  return (
    <View style={style.container}>
      {errors.map((error, index) => {
        return (
          <Text key={index} style={style.text}>
            {error}
          </Text>
        );
      })}
    </View>
  );
};

export default ErrorMessage;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#f8d7da",
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  text: {
    color: "#721c24",
    marginTop: 5,
  },
});
