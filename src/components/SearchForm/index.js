import React from 'react';
import {
    Text, TextInput, TouchableHighlight, View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

const SearchForm = ({ style }) => (
    <View style={style}>
        <View style={styles.inputView}>
            <Feather name="search" size={28} color="black" />
            <TextInput
                autoCapitalize="none"
                placeholder="Search for a repository or user"
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
                    Search
                </Text>
            </LinearGradient>
        </TouchableHighlight>
    </View>
);

export default SearchForm;
