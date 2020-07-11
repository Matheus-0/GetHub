import React from 'react';
import {
    Text, TextInput, TouchableHighlight, View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

const LoginForm = ({ style }) => (
    <View style={style}>
        <View style={styles.inputView}>
            <Feather name="user" size={28} color="black" />
            <TextInput
                autoCapitalize="none"
                placeholder="Username or email address"
                style={styles.input}
                underlineColorAndroid="transparent"
            />
        </View>

        <View style={styles.inputView}>
            <Feather name="lock" size={28} color="black" />
            <TextInput
                autoCapitalize="none"
                secureTextEntry
                placeholder="Password"
                style={styles.input}
                underlineColorAndroid="transparent"
            />
        </View>

        <TouchableHighlight
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
