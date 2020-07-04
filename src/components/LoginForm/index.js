import React from 'react';
import { Text, TextInput, TouchableHighlight, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';

// eslint-disable-next-line react/prop-types
const LoginForm = ({ style }) => (
    <View style={style}>
        <TextInput
            autoCapitalize="none"
            elevation={5}
            placeholder="Username or email address"
            style={styles.input}
        />
        <TextInput
            elevation={5}
            placeholder="Password"
            secureTextEntry
            style={styles.input}
        />
        <TouchableHighlight
            onPress={() => { alert('Test!'); }}
            style={styles.touchable}
        >
            <LinearGradient
                colors={['#555fa0', '#695596', '#503769']}
                style={styles.gradientButton}
            >
                <Text style={styles.buttonText}>
                    Log In
                </Text>
            </LinearGradient>
        </TouchableHighlight>
    </View>
);

export default LoginForm;
