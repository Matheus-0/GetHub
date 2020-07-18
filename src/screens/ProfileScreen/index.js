import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
                <View style={{ backgroundColor: 'green', flex: 3, width: '100%' }} />
                <View style={{ backgroundColor: 'blue', flex: 1, width: '100%' }} />
                <View style={{ backgroundColor: 'orange', flex: 1, width: '100%' }} />
                <View style={{ backgroundColor: 'red', flex: 1, width: '100%' }} />
                <View style={{ backgroundColor: 'purple', flex: 7, width: '100%' }} />
            </View>
        );
    }
}
