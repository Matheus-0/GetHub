import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './screens/SearchScreen';
import Showcase1 from './screens/Showcase1';
import Showcase2 from './screens/Showcase2';
import Showcase3 from './screens/Showcase3';

const MainStack = createStackNavigator();

function Routes({ isFirstLaunch }) {
    return (
        <NavigationContainer>
<<<<<<< HEAD
            <MainStack.Navigator>
                {!isFirstLaunch ? (
                    <MainStack.Screen
                        name="LoginScreen"
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
=======
            <MainStack.Navigator initialRouteName={isFirstLaunch ? 'Showcase1' : 'Search'}>
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
                <MainStack.Screen
                    name="Search"
                    component={SearchScreen}
                    options={{
                        headerShown: false,
                    }}
                />
>>>>>>> 867c54425ff4a1b51e0d10b2172e57cf7b6d83ba
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
