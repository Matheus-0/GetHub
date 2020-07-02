import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    hello: {
        fontSize: 14,
    },
});

export default function App() {
    return (
        <View styles={styles.container}>
            <Text>Hello, World!</Text>
        </View>
    );
}
