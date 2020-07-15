import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import styles from './styles';

export default function SecondSearchScreen({ route, navigation }) {
    const { users } = route.params;

    return (
        <View style={styles.screen}>
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
