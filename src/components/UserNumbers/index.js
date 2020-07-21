import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export default function UserNumbers({ followers, following, repositories }) {
    return (
        <View style={styles.container}>
            <View style={styles.containerItem}>
                <Text style={styles.number}>{repositories}</Text>
                <Text style={{ color: 'white' }}>repositories</Text>
            </View>
            <View style={styles.containerItem}>
                <Text style={styles.number}>{followers}</Text>
                <Text style={{ color: 'white' }}>followers</Text>
            </View>
            <View style={styles.containerItem}>
                <Text style={styles.number}>{following}</Text>
                <Text style={{ color: 'white' }}>following</Text>
            </View>
        </View>
    );
}
