import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { TEXT_LIGHT } from "../../../assets/styles";
import MainButton from "../../../components/buttons/MainButton";
import AppTextInput from "../../../components/input/AppTextInput";
import MainHeading from "../../../components/text/MainHeading";

interface IProps {}

const PasswordEntry: React.FC<IProps> = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigator = useNavigation();

  const handleContinuePress = () => {
    navigator.navigate("VerificationCodeScreen");
  };

  return (
    <View style={style.container}>
      <MainHeading text="My password" />
      <Text style={style.subText}>
        Please enter a strong password for your account. Your password must
        contain a atleast one Capital Letter, Digit and Special Character
      </Text>
      <AppTextInput
        style={{ marginTop: 32 }}
        placeholder="Enter your password here"
        placeholderTextColor={TEXT_LIGHT}
        secureTextEntry
        value={password}
        onChangeText={(text: string) => setPassword(text)}
      />
      <AppTextInput
        style={{ marginTop: 15 }}
        placeholder="Enter your password again"
        placeholderTextColor={TEXT_LIGHT}
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text: string) => setConfirmPassword(text)}
      />
      <MainButton
        text="Continue"
        style={{ marginTop: 70 }}
        onPress={handleContinuePress}
      />
    </View>
  );
};

export default PasswordEntry;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    paddingHorizontal: 30,
    marginTop: "35%",
  },
  subText: {
    color: TEXT_LIGHT,
    marginTop: 5,
  },
});
