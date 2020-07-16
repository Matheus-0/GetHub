import React from 'react';
import {
    ScrollView, Text, TextInput, View, Picker,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import UserContainer from '../../components/UserContainer';
import NothingFound from '../../components/NothingFound';

import { searchUsers, searchRepositories } from '../../api/api';

import styles from './styles';

export default class SecondSearchScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchItems: this.props.route.params.users,
            prevSearch: this.props.route.params.itemName,
            option: 'user',
            timeout: 0,
        };
    }

    updateUserList(query) {
        if (this.state.timeout) clearTimeout(this.state.timeout);

        this.state.timeout = setTimeout(async () => {
            if (query.trim()) {
                let data = [];
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
                console.log(data.total_count);
                if (data) this.setState({ prevSearch: query, searchItems: data });
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
                    <View style={styles.searchContainer}>
                        <View style={styles.inputView}>
                            <Feather name="search" size={24} color="black" />
                            <TextInput
                                autoCapitalize="none"
                                placeholder={this.state.prevSearch}
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                onChangeText={(query) => {
                                    this.updateUserList(query);
                                }}
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
                                <Picker.Item label="User" value="user" />
                                <Picker.Item label="Repository" value="repo" />
                            </Picker>
                        </View>
                    </View>

                </View>

                <View style={styles.searchTitleView}>
                    <Text style={styles.searchTitle}>Search results</Text>
                </View>

                <View style={styles.scrollViewParent}>
                    {!this.state.searchItems.total_count
                        ? (
                            <ScrollView contentContainerStyle={styles.scrollView}>
                                {this.state.searchItems.items.map((user) => (
                                    <UserContainer
                                        gradientStyle={styles.gradientStyle}
                                        key={user.id}
                                        touchableStyle={styles.touchableStyle}
                                        user={user}
                                    />
                                ))}
                            </ScrollView>
                        )
                        : (
                            <NothingFound />
                        )}
                </View>
            </View>
        );
    }
}
