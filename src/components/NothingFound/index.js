import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

function NothingFound() {
    return (
        <View style={styles.container}>
            <Feather style={{ marginBottom: 15 }} size={150} color="white" name="alert-circle" />
            <Text style={styles.nothingFound}>Nothing found.</Text>
            <Text style={styles.description}>
                Check if the input was correct or select between users/repositories.
            </Text>
        </View>
    );
}

export default NothingFound;
