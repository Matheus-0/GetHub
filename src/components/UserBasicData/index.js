import React from 'react';
import { Image, Text, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import styles from './styles';

export default function UserBasicData({
    avatar, bio, location, username,
}) {
    return (
        <View style={styles.container}>
            <View style={styles.containerItem}>
                <Image source={{ uri: avatar }} style={styles.image} />
            </View>
            <View style={styles.containerItem}>
                <Text style={styles.username}>{username}</Text>
                {bio && <Text style={styles.bio}>{bio}</Text>}
                {location && (
                    <View style={styles.locationView}>
                        <SimpleLineIcons name="location-pin" size={20} color="white" />
                        <Text style={styles.locationText}>{location}</Text>
                    </View>
                )}
            </View>
        </View>
    );
}
