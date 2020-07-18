/* eslint-disable max-len */
import React from 'react';
import { Image, Text, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import styles from './styles';

export default function UserBasicData({ user }) {
    return (
        <View style={styles.container}>
            <View style={styles.containerItem}>
                <Image source={{ uri: user.avatar_url }} style={styles.image} />
            </View>
            <View style={styles.containerItem}>
                <Text style={styles.username}>{user.login}</Text>
                <Text style={styles.bio}>{user.bio}</Text>
                <View style={styles.locationView}>
                    <SimpleLineIcons name="location-pin" size={20} color="white" />
                    <Text style={styles.locationText}>{user.location}</Text>
                </View>
            </View>
        </View>
    );
}
