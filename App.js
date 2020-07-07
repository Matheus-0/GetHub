import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default class App extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="light" />
                <Routes />
            </View>
        );
    }
}
