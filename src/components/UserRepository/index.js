import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

function UserRepository({ repository }) {
    const iconSize = 24;
    return (
        <View style={styles.repoContainer}>
            <View style={styles.repoTitle}>
                <Text style={styles.title}>{repository.name}</Text>
                <View style={styles.icons}>
                    <Feather name="git-branch" size={iconSize} />
                    <Text>{repository.watchers_count}</Text>
                    <Feather name="eye" size={iconSize} />
                    <Text>{repository.stargazers_count}</Text>
                    <Feather name="star" size={iconSize} />
                </View>
            </View>

            <Text>Created at: {repository.description}</Text>
            <Text>Last update: {repository.update_at}</Text>
        </View>
    );
}

export default UserRepository;
