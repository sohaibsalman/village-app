import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import styles, { TEXT_LIGHT } from "../../../assets/styles";
import MainButton from "../../../components/buttons/MainButton";
import AppTextInput from "../../../components/input/AppTextInput";
import MainHeading from "../../../components/text/MainHeading";

const EmailEntry = () => {
  const [email, setEmail] = useState("");

  const navigator = useNavigation();

  const handleNextPress = () => {
    if (email.trim() !== "") {
      navigator.navigate("VerificationCodeScreen", {
        userId: email,
        email,
      });
    }
  };

  return (
    <View style={[styles.top, style.container]}>
      <MainHeading text="My email" />
      <Text style={style.subText}>
        Please enter your valid email address. We will send you a 4-digit code
        to verify your account.
      </Text>
      <AppTextInput
        autoComplete="email"
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Enter your email here"
        placeholderTextColor={TEXT_LIGHT}
        style={{ marginTop: 32 }}
        value={email}
        onChangeText={(text: string) => setEmail(text)}
      />
      <MainButton
        text="Continue"
        style={{ marginTop: 70 }}
        onPress={handleNextPress}
      />
    </View>
  );
};

export default EmailEntry;

const style = StyleSheet.create({
  container: {
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
