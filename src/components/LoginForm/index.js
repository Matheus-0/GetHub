import React from 'react';
import { TextInput, View } from 'react-native';

import styles from './styles';

export default function LoginForm(props) {
    return (
        // eslint-disable-next-line react/destructuring-assignment,react/prop-types
        <View style={props.style}>
            <TextInput elevation={5} style={styles.input} />
            <TextInput elevation={5} style={styles.input} />
        </View>
    );
}
