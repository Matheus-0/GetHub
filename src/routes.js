import React from 'react';
import { TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import NoConnectionScreen from './screens/NoConnectionScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import SecondSearchScreen from './screens/SecondSearchScreen';
import Showcase1 from './screens/Showcase1';
import Showcase2 from './screens/Showcase2';
import Showcase3 from './screens/Showcase3';

import colors from './data/colors';

const MainStack = createStackNavigator();

function Routes({ isFirstLaunch, networkAvailable }) {
    return (
        <NavigationContainer>
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

                <MainStack.Screen
                    name="NoConnectionScreen"
                    component={NoConnectionScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                <MainStack.Screen
                    name="SecondSearchScreen"
                    component={SecondSearchScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                <MainStack.Screen
                    name="ProfileScreen"
                    component={ProfileScreen}
                    options={
                        ({ navigation, route }) => ({
                            title: route.params.username,
                            headerLeft: () => (
                                <TouchableHighlight
                                    onPress={() => navigation.goBack()}
                                    style={{ paddingHorizontal: 15, paddingVertical: 12 }}
                                    underlayColor="transparent"
                                >
                                    <Ionicons name="ios-arrow-back" size={24} color={colors.softYellow} />
                                </TouchableHighlight>
                            ),
                            headerStyle: {
                                backgroundColor: '#282828',
                                height: 75,
                            },
                            headerTintColor: 'yellow',
                            headerTitleStyle: {
                                color: 'white',
                                fontSize: 15,
                                fontWeight: '100',
                            },
                        })
                    }
                />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
