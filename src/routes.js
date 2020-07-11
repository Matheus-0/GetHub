import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import Showcase1 from './screens/Showcase1';
import Showcase2 from './screens/Showcase2';
import Showcase3 from './screens/Showcase3';

const MainStack = createStackNavigator();

function Routes({ isFirstLaunch }) {
    return (
        <NavigationContainer>
            <MainStack.Navigator>
                {!isFirstLaunch ? (
                    <MainStack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                ) : (
                    <>
                        <MainStack.Screen
                            name="Showcase1"
                            component={Showcase1}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <MainStack.Screen
                            name="Showcase2"
                            component={Showcase2}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <MainStack.Screen
                            name="Showcase3"
                            component={Showcase3}
                            options={{
                                headerShown: false,
                            }}
                        />
                    </>
                )}
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
