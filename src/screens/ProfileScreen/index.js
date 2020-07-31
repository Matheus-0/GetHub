import React from 'react';
import {
    ScrollView, Text, TouchableHighlight, View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import colors from '../../data/colors';
import styles from './styles';

import LoadingStatus from '../../components/LoadingStatus';
import UserBasicData from '../../components/UserBasicData';
import UserNumbers from '../../components/UserNumbers';
import UserRepository from '../../components/UserRepository';

import openOnBrowser from '../../utils/openOnBrowser';
import shadeColor from '../../utils/shadeColor';

import { getUser, getUserRepositories } from '../../api/api';

export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            userInfo: '',
            username: this.props.route.params.username,
            userRepositories: '',
        };
    }

    async componentDidMount() {
        const { username } = this.state;

        const userInfo = await getUser(username);
        const userRepositories = await getUserRepositories(username);

        this.setState({ userInfo });
        this.setState({ userRepositories });
        this.setState({ loading: false });
    }

    render() {
        const { loading, userInfo, userRepositories } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <LinearGradient
                    colors={['#1e1e1e', '#0f0f0f']}
                    start={[0.6, 0.3]}
                    end={[0.3, 0.7]}
                    style={styles.gradient}
                />

                {!loading ? (
                    <ScrollView
                        style={{ flex: 1 }}
                        contentContainerStyle={{ alignItems: 'center', paddingTop: 20 }}
                    >
                        <UserBasicData
                            avatar={userInfo.avatar_url}
                            bio={userInfo.bio}
                            location={userInfo.location}
                            style={{ marginBottom: 30 }}
                            username={userInfo.name ? userInfo.name : userInfo.login}
                        />

                        <UserNumbers
                            followers={userInfo.followers}
                            following={userInfo.following}
                            repositories={userInfo.public_repos}
                            style={{ marginBottom: 30, width: '90%' }}
                        />

                        <TouchableHighlight
                            onPress={() => openOnBrowser(userInfo.html_url)}
                            style={styles.openProfileTouchable}
                            underlayColor={shadeColor(colors.hardYellow, -25)}
                        >
                            <Text style={styles.openProfileText}>OPEN PROFILE</Text>
                        </TouchableHighlight>

                        <Text style={styles.publicText}>PUBLIC REPOSITORIES</Text>

                        {userRepositories.length > 0 && (
                            <ScrollView
                                style={{ width: '90%' }}
                                // eslint-disable-next-line max-len
                                // contentContainerStyle={{ alignItems: 'stretch', paddingBottom: 20, paddingHorizontal: 20 }}
                            >
                                {userRepositories.map((repo) => (
                                    <UserRepository repository={repo} key={repo.id} />
                                ))}
                            </ScrollView>
                        )}

                        {userRepositories.length === 0 && (
                            <View style={{ alignItems: 'center', marginTop: 15 }}>
                                <Feather name="alert-circle" size={100} style={{ marginBottom: 15 }} color="white" />
                                <Text style={{ color: 'white' }}>No repositories found.</Text>
                            </View>
                        )}
                    </ScrollView>
                ) : (
                    <LoadingStatus style={{ flex: 1 }} text="Loading profile..." />
                )}
            </View>
        );
    }
}
