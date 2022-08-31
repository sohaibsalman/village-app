import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import SignUp from './SignUp';
import EmailEntry from "./registration/EmailEntry";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="SignupScreen">
      <Stack.Screen
        name="SignupScreen"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmailEntryScreen"
        component={EmailEntry}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};


export default Auth;