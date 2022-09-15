import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import PhoneInput from "react-native-phone-number-input";

import styles, { BORDER_LIGHT, TEXT_LIGHT } from "../../../assets/styles";
import MainButton from "../../../components/buttons/MainButton";
import TextError from "../../../components/errors/textError";
import MainHeading from "../../../components/text/MainHeading";
import { http } from "../../../services/httpService";

interface IProps {}

const NumberEntry: React.FC<IProps> = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const navigator = useNavigation();
  const phoneInput = useRef(null);

  const handleNextPress = async () => {
    setError("");

    if (await validatePhone()) {
      navigator.navigate("VerificationCodeScreen", {
        userId: phoneNumber,
        mobile: phoneNumber,
      });
    }
  };

  const validatePhone = async (): Promise<boolean> => {
    if (
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{6}$/.test(
        phoneNumber
      )
    ) {
      setError("Invalid phone number");
      return false;
    }

    try {
      await http.post("/api/users/validateUserId", { userId: phoneNumber });
    } catch (error) {
      setError("Phone number already in use");
      return false;
    }

    return true;
  };

  return (
    <ScrollView contentContainerStyle={[styles.top, style.scrollView]}>
      <View style={style.container}>
        <MainHeading text="My mobile" />
        <Text style={style.subText}>
          Please enter your valid phone number. We will send you a 4-digit code
          to verify your account.
        </Text>
        <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          defaultCode="US"
          layout="first"
          autoFocus
          containerStyle={style.phoneContainer}
          textContainerStyle={style.textInput}
          onChangeFormattedText={(text) => {
            setPhoneNumber(text);
          }}
        />
        {error && <TextError text={error} />}
        <MainButton
          text="Continue"
          style={{ marginTop: 70 }}
          onPress={handleNextPress}
        />
      </View>
    </ScrollView>
  );
};

export default NumberEntry;

const style = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 30,
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  subText: {
    color: TEXT_LIGHT,
    marginTop: 5,
  },
  phoneContainer: {
    borderColor: BORDER_LIGHT,
    borderWidth: 1,
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 8,
    borderRadius: 15,
    marginTop: 32,
  },
  textInput: {
    paddingVertical: 0,
    backgroundColor: "transparent",
  },
});
