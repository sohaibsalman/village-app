import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { LIGHTGRAY, PRIMARY_COLOR, WHITE } from "../../assets/styles";
import { Icon } from "../../components";

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/logo2.png")}
      />
      <Text style={{ fontWeight: "bold" }}>Sign up to continue</Text>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          navigation.navigate("EmailEntryScreen");
        }}
      >
        <Text style={{ color: WHITE }}>Continue with email</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />

      <TouchableOpacity
        style={styles.loginPhone}
        onPress={() => {
          navigation.navigate("NumberEntryScreen");
        }}
      >
        <Text style={{ color: PRIMARY_COLOR }}>Use phone number</Text>
      </TouchableOpacity>

      <View style={styles.signupLine}>
        <View
          style={{
            flexDirection: "row",
            width: "80%",
            alignSelf: "center",
          }}
        >
          <View
            style={{
              backgroundColor: LIGHTGRAY,
              height: 1,
              flex: 1,
              alignSelf: "center",
            }}
          />
          <Text
            style={{
              alignSelf: "center",
              paddingHorizontal: 5,
              fontSize: 14,
            }}
          >
            Or sign up with
          </Text>
          <View
            style={{
              backgroundColor: LIGHTGRAY,
              height: 1,
              flex: 1,
              alignSelf: "center",
            }}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Icon
          name="logo-facebook"
          size={30}
          color={PRIMARY_COLOR}
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 15,
            borderColor: LIGHTGRAY,
            marginRight: 10,
          }}
        ></Icon>
        <Icon
          name="logo-google"
          size={30}
          color={PRIMARY_COLOR}
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 15,
            borderColor: LIGHTGRAY,
            marginRight: 10,
          }}
        ></Icon>
        <Icon
          name="logo-apple"
          size={30}
          color={PRIMARY_COLOR}
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 15,
            borderColor: LIGHTGRAY,
            marginRight: 10,
          }}
        ></Icon>
      </View>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: 0,
          marginBottom: 30,
        }}
      >
        <Text style={{ marginRight: 40, color: PRIMARY_COLOR }}>Terms of Use</Text>
        <Text style={{ color: PRIMARY_COLOR }}>Privacy Policy</Text>
      </View>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: PRIMARY_COLOR,

  },

  loginPhone: {
    borderRadius: 15,
    borderColor: LIGHTGRAY,
    borderWidth: 1,
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  signupLine: {
    marginTop: 50,
    marginBottom: 30
  }

});