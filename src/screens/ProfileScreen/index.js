import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { TouchableHighlight as TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

import UserBasicData from '../../components/UserBasicData';
import UserNumbers from '../../components/UserNumbers';

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
            <View style={styles.screen}>
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
                    <TouchableOpacity
                        onPress={() => {}}
                        style={styles.openProfileTouchable}
                        underlayColor="gray"
                    >
                        <Text style={styles.openProfileText}>Open Profile</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.publicView}>
                    <Text style={styles.publicText}>PUBLIC REPOSITORIES</Text>
                </View>

                <View style={{ flex: 9 }} />
            </View>
        );
    }
}
