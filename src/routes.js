import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';

const routes = createSwitchNavigator({
    LoginScreen: {
        screen: LoginScreen,
    },
});

export default createAppContainer(routes);
