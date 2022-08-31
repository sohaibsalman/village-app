import React from "react";
import { StyleSheet, Text } from "react-native";

interface IProps {
  text: string;
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 34,
    fontWeight: "700",
    marginLeft: -10,
  },
});

const MainHeading: React.FC<IProps> = ({ text }) => {
  return <Text style={[styles.heading]}> {text} </Text>;
};

export default MainHeading;
