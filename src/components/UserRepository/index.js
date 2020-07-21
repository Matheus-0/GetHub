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

            <View style={{ width: '100%', maxWidth: '100%' }}>
                <View style={styles.textView}>
                    <Text style={styles.textDescription}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Description:
                            <Text style={{ fontWeight: 'normal' }} >
                                 {repository.description}
                            </Text>
                        </Text>
                    </Text>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.textDescription}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Description:
                            <Text style={{ fontWeight: 'normal' }} > 
                                {repository.description}
                            </Text>
                        </Text>
                    </Text>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.textDescription}>
                        
                    </Text>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.textDescription} >
                        Last update: { parseDate(repository.updated_at) }
                    </Text>
                </View>
            </View>

        </View>
    );
}

export default UserRepository;
