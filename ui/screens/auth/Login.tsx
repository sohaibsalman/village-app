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
import { TextInput } from "react-native-gesture-handler";
import { LIGHTGRAY, PURPLE, WHITE } from "../../assets/styles";
import { Icon } from "../../components";

const Login = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../assets/images/logo1.png")} />
            <Text style={{ fontWeight: "bold" }}>Login to continue</Text>

            <TextInput style={styles.loginPhone} placeholder="Enter your Email">
            </TextInput>


            <TextInput style={styles.loginPhone} placeholder="Password" secureTextEntry={true}>

            </TextInput>

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
                        Or login with
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
                <Icon name="logo-facebook" size={30} color={PURPLE} style={{ padding: 10, borderWidth: 1, borderRadius: 15, borderColor: LIGHTGRAY, marginRight: 10 }}></Icon>
                <Icon name="logo-google" size={30} color={PURPLE} style={{ padding: 10, borderWidth: 1, borderRadius: 15, borderColor: LIGHTGRAY, marginRight: 10 }}></Icon>
                <Icon name="logo-apple" size={30} color={PURPLE} style={{ padding: 10, borderWidth: 1, borderRadius: 15, borderColor: LIGHTGRAY, marginRight: 10 }}></Icon>

            </View>

            <View style={{ flexDirection: "row", bottom: 0, marginTop: 100 }}>
                <Text style={{ marginRight: 40, color: PURPLE }}>Terms of Use</Text>
                <Text style={{ color: PURPLE }}>Privacy Policy</Text>

            </View>

        </View>
    );
}

export default Login;

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
        backgroundColor: PURPLE,

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
        textAlign: "center"

    },

    signupLine: {
        marginTop: 50,
        marginBottom: 30
    }

});