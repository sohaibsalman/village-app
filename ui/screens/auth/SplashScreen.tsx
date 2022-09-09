import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";

import styles from "../../assets/styles";
import MainButton from "../../components/buttons/MainButton";
import TextButton from "../../components/buttons/TextButton";
import { getAuthToken } from "../../services/authService";

interface IProps {}

const SplashScreen: React.FC<IProps> = () => {
  const navigator = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const validateLogin = async () => {
    const token = await getAuthToken();

    console.log(token);

    if (token) {
      setIsLoggedIn(true);
      setTimeout(() => {
        navigator.navigate("Main");
      }, 1000);
    }
  };

  useEffect(() => {
    validateLogin();
  }, []);

  return (
    <View style={[styles.top, style.container]}>
      <Image
        style={style.logo}
        source={require("../../assets/images/logo1.png")}
      />
      {isLoggedIn ? (
        <Text style={style.loadingText}>Loading...</Text>
      ) : (
        <View style={style.buttonContainer}>
          <MainButton
            text="Login"
            onPress={() => navigator.navigate("LoginScreen")}
          />
          <TextButton
            text="Sign Up"
            onPress={() => navigator.navigate("SignupScreen")}
          />
        </View>
      )}
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
    width: "100%",
  },
  loadingText: {
    fontSize: 20,
  },
  logo: {
    marginBottom: 30,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 50,
  },
});
