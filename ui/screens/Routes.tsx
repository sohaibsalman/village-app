import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import Auth from './auth/Auth';
import Main from './Main';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Auth">
                {/* Auth Navigator: Include Login and Signup */}
                <Stack.Screen
                    name="Auth"
                    component={Auth}
                    options={{ headerShown: false }}
                />
                {/* Navigation Drawer as a landing page */}
                <Stack.Screen
                    name="Main"
                    component={Main}
                    // Hiding header for Navigation Drawer
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;