import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import SignUp from './SignUp';
import EmailEntry from "./registration/EmailEntry";
import VerificationCode from "./registration/VerificationCode";
import ProfileDetails from "./registration/ProfileDetails";
import SplashScreen from "./SplashScreen";
import Login from "./Login";
import PasswordEntry from "./registration/PasswordEntry";
import { AuthStackParamList } from "../../types";
import GenderEntry from "./registration/GenderEntry";
import NumberEntry from "./registration/NumberEntry";
import AreasOfInterest from "./registration/AreasOfInterest";

const Stack = createStackNavigator<AuthStackParamList>();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmailEntryScreen"
        component={EmailEntry}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NumberEntryScreen"
        component={NumberEntry}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PasswordEntryScreen"
        component={PasswordEntry}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VerificationCodeScreen"
        component={VerificationCode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileDetailScreen"
        component={ProfileDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GenderEntryScreen"
        component={GenderEntry}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AreasOfInterestScreen"
        component={AreasOfInterest}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};


export default Auth;