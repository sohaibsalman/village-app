import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import styles, { TEXT_LIGHT } from "../../../assets/styles";
import MainButton from "../../../components/buttons/MainButton";
import TextError from "../../../components/errors/textError";
import AppTextInput from "../../../components/input/AppTextInput";
import MainHeading from "../../../components/text/MainHeading";
import { http } from "../../../services/httpService";

const EmailEntry = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigator = useNavigation();

  const validateEmail = async (email: string): Promise<boolean> => {
    email = email.trim();

    if (email.length === 0) {
      setError("Email is requied");
      return false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setError("Invalid email address");
      return false;
    }

    try {
      await http.post("/api/users/validateUserId", { userId: email });
    } catch (error) {
      setError("Email already in use");
      return false;
    }

    return true;
  };

  const handleNextPress = async () => {
    if (await validateEmail(email)) {
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
        onChangeText={(text: string) => setEmail(text.trim())}
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
