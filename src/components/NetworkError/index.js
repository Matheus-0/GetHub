import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function NetworkError({ color, connected }) {
    return (
        <View
            style={[styles.errorView, { backgroundColor: color }]}
        >
            <Text style={styles.errorText}>
                {connected ? 'Connection established.' : 'No connection.'}
            </Text>
        </View>
    );
}
