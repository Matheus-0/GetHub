import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function NetworkError({ color }) {
    return (
        <View
            style={[styles.errorView, { backgroundColor: color }]}
        >
            <Text style={styles.errorText}>
                {color === 'green' ? 'Connection estabilished' : 'Trying to connect'}
            </Text>
        </View>
    );
}
