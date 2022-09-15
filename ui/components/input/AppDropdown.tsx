import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Menu, MenuItem } from "react-native-material-menu";
import { BORDER_LIGHT, TEXT_LIGHT } from "../../assets/styles";
import Icon from "../Icon";

interface IProps {
  visible: boolean;
  primaryText: string;
  dropdownValues: string[];
  showMenu: () => void;
  hideMenu: () => void;
  onSelection: (index: number) => void;
  styles?: any;
}

const AppDropdown: React.FC<IProps> = ({
  visible,
  primaryText,
  dropdownValues,
  showMenu,
  hideMenu,
  onSelection,
  styles,
}) => {
  return (
    <View style={styles}>
      <Menu
        visible={visible}
        anchor={
          <TouchableOpacity onPress={showMenu} style={style.dropdown}>
            <Text style={style.text}>{primaryText}</Text>
            <View>
              <Icon name="chevron-down" size={15} color="black" />
            </View>
          </TouchableOpacity>
        }
        onRequestClose={hideMenu}
      >
        {dropdownValues.map((value, index) => {
          return (
            <MenuItem
              key={index}
              onPress={() => onSelection(index)}
              style={{ maxWidth: "100%" }}
            >
              {value}
            </MenuItem>
          );
        })}
      </Menu>
    </View>
  );
};

export default AppDropdown;

const style = StyleSheet.create({
  dropdown: {
    borderColor: BORDER_LIGHT,
    borderWidth: 1,
    width: "100%",
    padding: 20,
    borderRadius: 15,
    flexDirection: "row",
  },
  text: {
    color: TEXT_LIGHT,
    flex: 1,
  },
});
