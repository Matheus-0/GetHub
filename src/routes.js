import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import Showcase from './screens/Showcase';

const Stack = createStackNavigator(
    
);

function Routes({ isFirstLaunch }) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isFirstLaunch ? (
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                ) : (
                    <Stack.Screen
                        name="Showcase"
                        component={Showcase}
                        options={{
                            headerShown: false,
                        }}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
