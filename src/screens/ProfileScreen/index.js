import React from 'react';
import {
    ScrollView, Text, TouchableHighlight, View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
                        style={styles.screen}
                        contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
                    >
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
                ) : (
                    <LoadingStatus text="Loading profile..." />
                )}
            </View>
        );
    }
}
