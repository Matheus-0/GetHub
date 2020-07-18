import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';

import UserBasicData from '../../components/UserBasicData';

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

                <View style={{ flex: 4 }}>
                    <UserBasicData user={userInfo} />
                </View>

                <View style={{ flex: 1 }} />
                <View style={{ flex: 1 }} />
                <View style={{ flex: 1 }} />
                <View style={{ flex: 7 }} />
            </View>
        );
    }
}
