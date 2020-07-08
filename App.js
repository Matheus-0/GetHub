import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-community/async-storage';

import Routes from './src/routes';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstLaunch: false,
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

    render() {
        const { firstLaunch } = this.state;

        return (
            <>
                <StatusBar style="light" />
                <Routes isFirstLaunch={firstLaunch} />
            </>
        );
    }
}
