import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

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
                <Text>{userInfo.login}</Text>
                <Text>{userInfo.name}</Text>
            </View>
        );
    }
}
