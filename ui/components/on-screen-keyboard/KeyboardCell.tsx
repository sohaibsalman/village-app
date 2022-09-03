import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Icon from "../Icon";
import { BLACK } from "../../assets/styles";

interface IProps {
  text: string;
  icon?: string;
  onPress: (text: string) => void;
}

const KeyboardCell: React.FC<IProps> = ({ text, icon = "", onPress }) => {
  return (
    <TouchableOpacity style={style.column} onPress={() => onPress(text)}>
      {icon ? (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Icon name="backspace-outline" color={BLACK} size={30} />
        </View>
      ) : (
        <Text style={style.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default KeyboardCell;

const style = StyleSheet.create({
  column: {
    width: "30%",
    height: 70,
  },
  text: {
    textAlign: "center",
    fontSize: 28,
  },
});
