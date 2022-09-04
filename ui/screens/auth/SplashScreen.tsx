import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";

import styles from "../../assets/styles";
import MainButton from "../../components/buttons/MainButton";
import TextButton from "../../components/buttons/TextButton";

interface IProps {}

const SplashScreen: React.FC<IProps> = () => {
  const navigator = useNavigation();

  return (
    <View style={[styles.top, style.container]}>
      <MainButton
        text="Login"
        onPress={() => navigator.navigate("LoginScreen")}
      />
      <TextButton
        text="Sign Up"
        onPress={() => navigator.navigate("SignupScreen")}
      />
    </View>
  );
};

export default SplashScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
  },
});
