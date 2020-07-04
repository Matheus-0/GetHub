import React from 'react';
import { TextInput, View } from 'react-native';

import styles from './styles';

// eslint-disable-next-line react/prop-types
const LoginForm = ({ style }) => (
    <View style={style}>
        <TextInput elevation={5} style={styles.input} />
        <TextInput elevation={5} style={styles.input} />
    </View>
);

export default LoginForm;
