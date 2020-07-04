import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';

// eslint-disable-next-line react/prop-types
const LoginForm = ({ style }) => (
    <View style={style}>
        <TextInput elevation={5} placeholder="Username or email address" style={styles.input} />
        <TextInput elevation={5} placeholder="Password" style={styles.input} />
        <LinearGradient
            colors={['#555fa0', '#695596', '#503769']}
            style={styles.gradientButton}
        >
            <Text style={styles.buttonText}>
                Log In
            </Text>
        </LinearGradient>
    </View>
);

export default LoginForm;
