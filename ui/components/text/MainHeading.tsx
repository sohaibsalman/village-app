import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

interface IProps extends TextProps {
  text: string;
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 34,
    fontWeight: "700",
    marginLeft: -10,
  },
});

const MainHeading: React.FC<IProps> = (props) => {
  const { text } = props;
  return <Text style={[styles.heading, props.style]}> {text} </Text>;
};

export default MainHeading;
