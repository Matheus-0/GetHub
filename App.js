import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getNetworkStateAsync } from 'expo-network';
import AsyncStorage from '@react-native-community/async-storage';

import Routes from './src/routes';
import colors from './src/data/colors';
import NetworkError from './src/components/NetworkError';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstLaunch: false,
            networkAvailable: true,
            showError: false,
            errorColor: 'green',
            interval: null,
            tries: 0,
        };
    }

    async componentDidMount() {
        try {
            const firstLaunch = await AsyncStorage.getItem('firstLaunch');

            if (!firstLaunch) {
                this.setState({ firstLaunch: true });
            } else {
                this.setState({ firstLaunch: false });
            }
        } catch (error) {
            this.setState({ firstLaunch: true });
        }
    }

    componentDidUpdate() {
        if (this.state.interval) clearTimeout(this.state.interval);
        this.state.interval = setTimeout(
            async () => {
                const { isConnected } = await getNetworkStateAsync();
                const { showError, errorColor } = this.state;

                if (!isConnected) {
                    this.setState({ networkAvailable: isConnected, showError: true, errorColor: 'red' });
                } else if (isConnected && showError && errorColor === 'red') {
                    this.setState({ networkAvailable: isConnected, errorColor: 'green' });
                } else {
                    this.setState({ networkAvailable: isConnected, showError: false });
                }
            },
            2000,
        );
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

                {this.state.showError && (
                    <NetworkError
                        color={this.state.errorColor}
                    />
                )}
            </>
        );
    }
}
