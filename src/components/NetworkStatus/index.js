import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function NetworkStatus({ color, text }) {
    return (
        <View
            style={[styles.statusView, { backgroundColor: color }]}
        >
            <Text style={styles.statusText}>
                {text}
            </Text>
        </View>
    );
}
