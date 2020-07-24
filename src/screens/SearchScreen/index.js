import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import SearchForm from '../../components/SearchForm';
import Logo from '../../components/Logo';

import colors from '../../data/colors';
import styles from './styles';

export default function SearchScreen({ navigation }) {
    return (
        <>
            <View style={styles.screen}>
                {/* <LinearGradient
                    colors={[
                        colors.hardYellow, colors.softLilac,
                    ]}
                    start={[0.6, 0.3]}
                    end={[0.3, 0.7]}
                    style={styles.gradient}
                /> */}
                <LinearGradient
                    colors={['#1e1e1e', '#0f0f0f']}
                    start={[0.6, 0.3]}
                    end={[0.3, 0.7]}
                    style={styles.gradient}
                />

                <Logo />
                <SearchForm style={styles.form} navigation={navigation} />
            </View>
        </>
    );
}
