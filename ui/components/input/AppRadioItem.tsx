import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  BORDER_LIGHT,
  PRIMARY_COLOR,
  TEXT_LIGHT,
  WHITE,
} from "../../assets/styles";

interface IProps {
  text: string;
  selected?: boolean;
  styles?: any;
  onPress: () => void;
}

const AppRadioItem: React.FC<IProps> = ({
  text,
  selected = false,
  styles,
  onPress,
}) => {
  const allStyles = selected
    ? [style.container, styles, style.selected]
    : [style.container, styles];
  return (
    <TouchableOpacity style={allStyles} onPress={onPress}>
      <Text style={selected ? { color: WHITE } : { color: TEXT_LIGHT }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default AppRadioItem;

const style = StyleSheet.create({
  container: {
    borderColor: BORDER_LIGHT,
    borderWidth: 1,
    width: "100%",
    padding: 20,
    borderRadius: 15,
  },
  selected: {
    backgroundColor: PRIMARY_COLOR,
  },
});
