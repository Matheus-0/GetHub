import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';

import Routes from './src/routes';

import NetworkError from './src/components/NetworkError';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            connectedColor: 'green',
            firstLaunch: false,
            networkAvailable: true,
            showStatus: false,
            errorColor: 'red',
            interval: null,
        };
    }

    async componentDidMount() {
        NetInfo.addEventListener((state) => {
            if (this.state.interval) clearTimeout(this.state.interval);

            this.state.interval = setTimeout(() => {
                this.setState({ networkAvailable: state.isConnected });

                if (!state.isConnected) {
                    this.setState({ showStatus: true });
                } else {
                    setTimeout(() => {
                        this.setState({ showStatus: false });
                    }, 3000);
                }
            }, 3000);
        });

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

    render() {
        const { firstLaunch, networkAvailable } = this.state;

        return (
            <>
                <StatusBar
                    style="light"
                    translucent
                />

                {!firstLaunch ? (
                    <Routes
                        isFirstLaunch
                        networkAvailable={networkAvailable}
                    />
                ) : (
                    <Routes
                        isFirstLaunch={false}
                        networkAvailable={networkAvailable}
                    />
                )}

                {this.state.showStatus && (
                    <NetworkError
                        color={networkAvailable ? this.state.connectedColor : this.state.errorColor}
                        connected={networkAvailable}
                    />
                )}
            </>
        );
    }
}
