import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { TEXT_LIGHT } from "../../../assets/styles";
import MainButton from "../../../components/buttons/MainButton";
import TextError from "../../../components/errors/textError";
import AppTextInput from "../../../components/input/AppTextInput";
import MainHeading from "../../../components/text/MainHeading";
import { AuthStackParamList } from "../../../types";

interface IProps {}

const PasswordEntry: React.FC<IProps> = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigator = useNavigation();
  const route =
    useRoute<RouteProp<AuthStackParamList, "PasswordEntryScreen">>();

  const handleNextPress = () => {
    const pass = password.trim();
    if (pass.length < 4) {
      setError("Password must be atleast 4 characters");
      return;
    } else if (pass !== confirmPassword.trim()) {
      setError("Passwords do no match");
      return;
    }

    const { userId, email } = route.params;
    navigator.navigate("ProfileDetailScreen", {
      userId,
      email,
      password,
    });
  };

  return (
    <View style={style.container}>
      <MainHeading text="My password" />
      <Text style={style.subText}>
        Please enter a strong password for your account. Your password must
        contain a atleast one Capital Letter, Digit and Special Character
      </Text>
      <AppTextInput
        autoCapitalize="none"
        style={{ marginTop: 32 }}
        placeholder="Enter your password here"
        placeholderTextColor={TEXT_LIGHT}
        secureTextEntry
        value={password}
        onChangeText={(text: string) => setPassword(text)}
      />
      <AppTextInput
        autoCapitalize="none"
        style={{ marginTop: 15 }}
        placeholder="Enter your password again"
        placeholderTextColor={TEXT_LIGHT}
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text: string) => setConfirmPassword(text)}
      />
      {error && <TextError text={error} />}
      <MainButton
        text="Continue"
        style={{ marginTop: 70 }}
        onPress={handleNextPress}
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
