import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import UserContainer from '../../components/UserContainer';

import styles from './styles';

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

            <Text style={styles.searchTitle}>Search results</Text>

            <ScrollView contentContainerStyle={styles.scrollView}>
                {users.items.map((user) => (
                    <UserContainer
                        gradientStyle={styles.gradientStyle}
                        key={user.id}
                        touchableStyle={styles.touchableStyle}
                        user={user}
                    />
                ))}
            </ScrollView>
        </View>
    );
}
