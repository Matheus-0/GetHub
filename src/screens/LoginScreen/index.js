import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import LoginForm from '../../components/LoginForm';

import colors from '../../data/colors';
import styles from './styles';

export default function LoginScreen() {
    return (
        <View style={styles.screen}>
            <LinearGradient
                colors={[
                    colors.softLilac, colors.hardYellow,
                ]}
                start={[0.4, 0.1]}
                end={[0.7, 0.7]}
                style={styles.gradient}
            />
            <LoginForm style={styles.form} />
        </View>
    );
}
