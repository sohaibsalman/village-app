import React from "react";
import { StyleSheet, View } from "react-native";

import KeyboardCell from "./KeyboardCell";

interface IProps {
  onKeyPress: (text: string) => void;
}

const OnScreenKeyboard: React.FC<IProps> = ({ onKeyPress }) => {
  return (
    <View style={style.container}>
      <View style={style.row}>
        <KeyboardCell text="1" onPress={onKeyPress} />
        <KeyboardCell text="2" onPress={onKeyPress} />
        <KeyboardCell text="3" onPress={onKeyPress} />
      </View>
      <View style={style.row}>
        <KeyboardCell text="4" onPress={onKeyPress} />
        <KeyboardCell text="5" onPress={onKeyPress} />
        <KeyboardCell text="6" onPress={onKeyPress} />
      </View>
      <View style={style.row}>
        <KeyboardCell text="7" onPress={onKeyPress} />
        <KeyboardCell text="8" onPress={onKeyPress} />
        <KeyboardCell text="9" onPress={onKeyPress} />
      </View>
      <View style={style.row}>
        <KeyboardCell text="" onPress={onKeyPress} />
        <KeyboardCell text="0" onPress={onKeyPress} />
        <KeyboardCell text="-" onPress={onKeyPress} icon="delete" />
      </View>
    </View>
  );
};

export default OnScreenKeyboard;

const style = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 50,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
