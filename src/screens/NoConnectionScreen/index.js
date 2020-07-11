import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../data/colors';
import styles from './styles';

export default function NoConnectionScreen() {
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
                <MaterialCommunityIcons
                    name="wifi-strength-off-outline"
                    size={160}
                    color={colors.darkBlue}
                    style={styles.icon}
                />
                <Text style={styles.warning}>
                    Sorry, no internet connection found. Check your Wi-Fi or mobile network.
                </Text>
            </View>
            <TouchableHighlight
                style={styles.touchable}
            >
                <LinearGradient
                    colors={['#555fa0', '#695596', '#503769']}
                    style={styles.gradientButton}
                >
                    <Text style={styles.buttonText}>
                        Try Again
                    </Text>
                </LinearGradient>
            </TouchableHighlight>
        </>
    );
}
