import React from 'react';
import { TextInput, View } from 'react-native';

import styles from './styles';

export default function LoginForm() {
    return (
        <View style={styles.container}>
            <TextInput elevation={5} style={styles.input} />
            <TextInput elevation={5} style={styles.input} />
        </View>
    );
}
