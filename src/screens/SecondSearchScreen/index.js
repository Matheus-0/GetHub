import React from 'react';
import {
    ScrollView, Text, TextInput, View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import UserContainer from '../../components/UserContainer';

import { searchUsers } from '../../api/api';

import styles from './styles';

export default class SecondSearchScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: this.props.route.params.users,
            timeout: 0,
        };
    }

    updateUserList(query) {
        if (this.state.timeout) clearTimeout(this.state.timeout);

        this.state.timeout = setTimeout(async () => {
            if (query.trim()) {
                const users = await searchUsers(query);

                if (users) this.setState({ users });
            }
        }, 500);
    }

    render() {
        return (
            <View style={styles.screen}>
                <LinearGradient
                    colors={['#1e1e1e', '#0f0f0f']}
                    start={[0.6, 0.3]}
                    end={[0.3, 0.7]}
                    style={styles.gradient}
                />

                <View style={styles.searchInputView}>
                    <View style={styles.inputView}>
                        <Feather name="search" size={28} color="black" />
                        <TextInput
                            autoCapitalize="none"
                            placeholder="Search for a repository or user"
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            onChangeText={(query) => {
                                this.updateUserList(query);
                            }}
                        />
                    </View>
                </View>

                <View style={styles.searchTitleView}>
                    <Text style={styles.searchTitle}>Search results</Text>
                </View>

                <View style={styles.scrollViewParent}>
                    <ScrollView contentContainerStyle={styles.scrollView}>
                        {this.state.users.items.map((user) => (
                            <UserContainer
                                gradientStyle={styles.gradientStyle}
                                key={user.id}
                                touchableStyle={styles.touchableStyle}
                                user={user}
                            />
                        ))}
                    </ScrollView>
                </View>
            </View>
        );
    }
}
