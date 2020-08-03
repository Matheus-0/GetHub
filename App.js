import React from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';

import Routes from './src/routes';

import NetworkStatus from './src/components/NetworkStatus';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            connectedColor: 'green',
            errorColor: 'red',
            firstLaunch: false,
            interval: null,
            isReady: false,
            networkAvailable: true,
            showStatus: false,
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

    async cacheResourcesAsync() {
        const images = [
            require('./assets/favicon.png'),
            require('./assets/icon.png'),
            require('./assets/logo.png'),
            require('./assets/splash.png'),
        ];

        const cacheImages = images.map((image) => Asset.fromModule(image).downloadAsync());

        return Promise.all(cacheImages);
    }

    render() {
        const { firstLaunch, isReady, networkAvailable } = this.state;

        if (!isReady) {
            // Add an AppLoading in case it's needed later
            return (
                <AppLoading
                    startAsync={this.cacheResourcesAsync}
                    onFinish={() => this.setState({ isReady: true })}
                />
            );
        }

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

                {this.state.showStatus && (
                    <NetworkStatus
                        color={networkAvailable ? this.state.connectedColor : this.state.errorColor}
                        text={networkAvailable ? 'Connection established.' : 'No connection.'}
                    />
                )}
            </>
        );
    }
}
