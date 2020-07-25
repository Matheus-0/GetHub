import React from 'react';
import {
    KeyboardAvoidingView, Picker, Platform, ScrollView, Text, TextInput, View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import NothingFound from '../../components/NothingFound';
import RepoContainer from '../../components/RepoContainer';
import UserContainer from '../../components/UserContainer';

import { searchUsers, searchRepositories } from '../../api/api';

import styles from './styles';

export default class SecondSearchScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prevSearch: this.props.route.params.itemName,
            option: 'user',
            searchItems: this.props.route.params.users,
            timeout: 0,
        };

        this.mapRepo = this.mapRepo.bind(this);
        this.mapUser = this.mapUser.bind(this);
    }

    mapUser(user) {
        return (
            <UserContainer
                gradientStyle={styles.gradientStyle}
                key={user.id}
                navigation={this.props.navigation}
                touchableStyle={styles.touchableStyle}
                user={user}
            />
        );
    }

    mapRepo(repo) {
        return (
            <RepoContainer
                gradientStyle={styles.gradientStyle}
                key={repo.id}
                navigation={this.props.navigation}
                touchableStyle={styles.touchableStyle}
                repo={repo}
            />
        );
    }

    updateUserList(query) {
        if (this.state.timeout) clearTimeout(this.state.timeout);

        this.state.timeout = setTimeout(async () => {
            if (query.trim()) {
                let data;

                switch (this.state.option) {
                    case 'user':
                        data = await searchUsers(query);
                        break;
                    case 'repo':
                        data = await searchRepositories(query);
                        break;
                    default:
                        data = await searchUsers(query);
                        break;
                }

                if (data) this.setState({ prevSearch: query, searchItems: data });
            }
        }, 500);
    }

    render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
                enabled={Platform.OS === 'ios'}
                style={styles.screen}
            >
                <LinearGradient
                    colors={['#1e1e1e', '#0f0f0f']}
                    start={[0.6, 0.3]}
                    end={[0.3, 0.7]}
                    style={styles.gradient}
                />

                <View style={styles.searchInputView}>
                    <View style={styles.searchContainer}>
                        <View style={styles.inputView}>
                            <Feather name="search" size={24} color="black" />
                            <TextInput
                                autoCapitalize="none"
                                placeholder="Search for user/repository"
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                onChangeText={(query) => {
                                    this.updateUserList(query);
                                }}
                                defaultValue={this.state.prevSearch}
                            />
                        </View>
                        <View style={styles.pickerView}>
                            <Picker
                                style={styles.pickerOption}
                                selectedValue={this.state.option}
                                onValueChange={(itemValue) => {
                                    this.setState({ option: itemValue });
                                    this.updateUserList(this.state.prevSearch);
                                }}
                            >
                                <Picker.Item label="Users" value="user" />
                                <Picker.Item label="Repositories" value="repo" />
                            </Picker>
                        </View>
                    </View>
                </View>

                <View style={styles.searchTitleView}>
                    <Text style={styles.searchTitle}>
                        {`${this.state.searchItems.items.length} result${this.state.searchItems.items.length === 1 ? '' : 's'}`}
                    </Text>
                </View>

                <View style={styles.scrollViewParent}>
                    {this.state.searchItems.items.length
                        ? (
                            <ScrollView contentContainerStyle={styles.scrollView}>
                                {this.state.searchItems.items.map(
                                    this.state.option === 'user' ? this.mapUser : this.mapRepo,
                                )}
                            </ScrollView>
                        )
                        : (
                            <NothingFound />
                        )}
                </View>
            </KeyboardAvoidingView>
        );
    }
}
