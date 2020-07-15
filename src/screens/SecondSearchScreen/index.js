import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import colors from '../../data/colors';

export default function SecondSearchScreen({ route, navigation }) {
    const { users } = route.params;

    return (
        <View style={styles.screen}>
            <LinearGradient
                colors={['#1e1e1e', '#0f0f0f']}
                start={[0.6, 0.3]}
                end={[0.3, 0.7]}
                style={styles.gradient}
            />

            <ScrollView contentContainerStyle={styles.scrollView}>
                {users.items.map((user) => (
                    <View style={styles.userView} key={user.id}>
                        <Text>
                            {`Username: ${user.login}`}
                        </Text>
                        <Text>
                            {`URL: ${user.html_url}`}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
