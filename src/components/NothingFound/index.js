import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

function NothingFound({ text }) {
    return (
        <View style={styles.container}>
            <Feather style={{ marginBottom: 15 }} size={150} color="white" name="alert-circle" />
            <Text style={styles.nothingFound}>Nothing found.</Text>
            <Text style={styles.description}>
                {text}
            </Text>
        </View>
    );
}

export default NothingFound;
