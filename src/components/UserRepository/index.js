import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

const parseDate = (date) => {
    const NewDate = new Date(date);

    return `${NewDate.toLocaleDateString()} at ${NewDate.getHours()}:${NewDate.getMinutes()}`;
};

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

            <View style={styles.textView}>
                <Text style={styles.textDescription}>
                    Description: {repository.description}
                </Text>
            </View>
            <View style={styles.textView}>
                <Text style={styles.textDescription}>
                    Created at: { parseDate(repository.created_at) }
                </Text>
            </View>
            <View style={styles.textView}>
                <Text style={styles.textDescription} >
                    Last update: { parseDate(repository.updated_at) }
                </Text>
            </View>
            

            
        </View>
    );
}

export default UserRepository;
