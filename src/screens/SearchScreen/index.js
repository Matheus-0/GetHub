import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import LoginForm from '../../components/LoginForm';

import colors from '../../data/colors';
import styles from './styles';

export default function SearchScreen() {
    return (
        <>
            <View style={styles.screen}>
                <LinearGradient
                    colors={[
                        colors.hardYellow, colors.softLilac,
                    ]}
                    start={[0.6, 0.3]}
                    end={[0.3, 0.7]}
                    style={styles.gradient}
                />
                <LoginForm style={styles.form} />
            </View>
        </>
    );
}
