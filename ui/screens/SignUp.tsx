import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";
import { BLACK, LIGHTGRAY, PURPLE, WHITE } from "../assets/styles";
import { Icon } from "../components";


export default function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("./assets/images/logo1.png")} />
            <Text style={{ fontWeight: "bold" }}>Sign up to continue</Text>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={{ color: WHITE }}>Continue with email</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />

            <TouchableOpacity style={styles.loginPhone}>
                <Text style={{ color: PURPLE }}>Continue with email</Text>
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
                <Icon name="logo-facebook" size={30} color={PURPLE} style={{ padding: 10, borderWidth: 1, borderRadius: 15, borderColor: LIGHTGRAY, marginRight: 10 }}></Icon>
                <Icon name="logo-google" size={30} color={PURPLE} style={{ padding: 10, borderWidth: 1, borderRadius: 15, borderColor: LIGHTGRAY, marginRight: 10 }}></Icon>
                <Icon name="logo-apple" size={30} color={PURPLE} style={{ padding: 10, borderWidth: 1, borderRadius: 15, borderColor: LIGHTGRAY, marginRight: 10 }}></Icon>

            </View>

            <View style={{ flexDirection: "row", position: "absolute", bottom: 0, marginBottom: 30 }}>
                <Text style={{ marginRight: 40, color: PURPLE }}>Terms of Use</Text>
                <Text style={{ color: PURPLE }}>Privacy Policy</Text>

            </View>

        </View>



    );
}

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
    },

    signupLine: {
        marginTop: 50,
        marginBottom: 30
    }

});