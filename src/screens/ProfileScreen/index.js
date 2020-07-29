import React from 'react';
import {
    ScrollView, Text, TouchableHighlight, View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../../data/colors';
import styles from './styles';

import UserBasicData from '../../components/UserBasicData';
import UserNumbers from '../../components/UserNumbers';
import UserRepository from '../../components/UserRepository';

import openOnBrowser from '../../utils/openOnBrowser';
import shadeColor from '../../utils/shadeColor';

export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: this.props.route.params.userInfo,
            userRepositories: this.props.route.params.userRepositories,
        };
    }

    render() {
        const { userInfo, userRepositories } = this.state;

        return (
            <ScrollView
                style={styles.screen}
                contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
            >
                <LinearGradient
                    colors={['#1e1e1e', '#0f0f0f']}
                    start={[0.6, 0.3]}
                    end={[0.3, 0.7]}
                    style={styles.gradient}
                />

                <View style={{ flex: 5 }}>
                    <UserBasicData
                        avatar={userInfo.avatar_url}
                        bio={userInfo.bio}
                        location={userInfo.location}
                        username={userInfo.login}
                    />
                </View>

                <View style={{ flex: 1 }}>
                    <UserNumbers
                        followers={userInfo.followers}
                        following={userInfo.following}
                        repositories={userInfo.public_repos}
                    />
                </View>

                <View style={styles.openProfileView}>
                    <TouchableHighlight
                        onPress={() => openOnBrowser(userInfo.html_url)}
                        style={styles.openProfileTouchable}
                        underlayColor={shadeColor(colors.hardYellow, -25)}
                    >
                        <Text style={styles.openProfileText}>OPEN PROFILE</Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.publicView}>
                    <Text style={styles.publicText}>PUBLIC REPOSITORIES</Text>
                </View>

                <View style={styles.repositoriesView}>
                    {userRepositories.length > 0 && (
                        <ScrollView
                            style={{ width: '100%' }}
                            // eslint-disable-next-line max-len
                            // contentContainerStyle={{ alignItems: 'stretch', paddingBottom: 20, paddingHorizontal: 20 }}
                        >
                            {userRepositories.map((repo) => (
                                <UserRepository repository={repo} key={repo.id} />
                            ))}
                        </ScrollView>
                    )}

                    {userRepositories.length === 0 && (
                        <Text style={{ color: 'white' }}>Nothing found.</Text>
                    )}
                </View>
            </ScrollView>
        );
    }
}
