import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import CountDown from "react-native-countdown-component";

import styles, { PRIMARY_COLOR, TEXT_LIGHT } from "../../../assets/styles";
import OnScreenKeyboard from "../../../components/on-screen-keyboard/OnScreenKeyboard";
import TextButton from "../../../components/buttons/TextButton";
import { AuthStackParamList } from "../../../types";

const VerificationCode = () => {
  const [value, setValue] = useState("");
  const cellCount = 4;

  const ref = useBlurOnFulfill({ value, cellCount });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const navigator = useNavigation();
  const route =
    useRoute<RouteProp<AuthStackParamList, "VerificationCodeScreen">>();

  const handleKeyPress = (text: string) => {
    if (text.trim() !== "-") {
      setValue(value + text);
    } else {
      const newText = value.slice(0, value.length - 1);
      setValue(newText);
    }

    if (value.length === 3) {
      const { userId, email, mobile } = route.params;
      navigator.navigate("PasswordEntryScreen", {
        userId,
        email,
        mobile,
      });
    }
  };

  return (
    <View style={[styles.top, style.container]}>
      <View style={{ width: "100%" }}>
        <CountDown
          size={40}
          until={90}
          digitStyle={{
            backgroundColor: "transparent",
            width: "auto",
            height: "auto",
          }}
          separatorStyle={{ fontSize: 40 }}
          timeToShow={["M", "S"]}
          timeLabels={{ m: "", s: "" }}
          showSeparator
        />
        <Text style={style.subText}>
          Type the verification code we've sent you
        </Text>
      </View>
      <View>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={cellCount}
          rootStyle={style.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              key={index}
              style={[style.cell, isFocused && style.focusCell]}
            >
              <Text
                onLayout={getCellOnLayoutHandler(index)}
                style={{ fontSize: 24, fontWeight: "700" }}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
      </View>
      <View>
        <OnScreenKeyboard onKeyPress={handleKeyPress} />
      </View>
      <View style={style.textButton}>
        <TextButton text="Send again" />
      </View>
    </View>
  );
};

export default VerificationCode;

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    flexDirection: "column",
    marginTop: "25%",
  },
  heading: { textAlign: "center" },
  subText: {
    textAlign: "center",
    paddingHorizontal: 45,
    fontSize: 18,
    color: TEXT_LIGHT,
    marginTop: 10,
    marginBottom: 20,
  },
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 70,
    height: 70,
    fontSize: 24,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    borderRadius: 20,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  focusCell: {
    borderColor: "#000",
  },
  textButton: {
    marginTop: 30,
  },
});
