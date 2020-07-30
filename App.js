import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { getNetworkStateAsync } from 'expo-network';
import AsyncStorage from '@react-native-community/async-storage';

import Routes from './src/routes';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstLaunch: false,
            networkAvailable: false,
        };
    }

    async componentDidMount() {
        try {
            const firstLaunch = await AsyncStorage.getItem('firstLaunch');
            const { isConnected } = await getNetworkStateAsync();

            this.setState({ networkAvailable: isConnected });

            if (!firstLaunch) {
                this.setState({ firstLaunch: true });
            } else {
                this.setState({ firstLaunch: false });
            }
        } catch (error) {
            this.setState({ firstLaunch: true });
        }
    }

    render() {
        const { firstLaunch, networkAvailable } = this.state;

        return (
            <>
                <StatusBar
                    style="light"
                    translucent
                />
                <Routes
                    isFirstLaunch={firstLaunch}
                    networkAvailable={networkAvailable}
                />
            </>
        );
    }
}
