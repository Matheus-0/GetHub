import React from 'react';
import {
    Image, Text, TouchableHighlight, View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../../data/colors';
import styles from './styles';

export default class UserContainer extends React.Component {
    render() {
        return (
            <TouchableHighlight
                onPress={() => {}}
                style={this.props.touchableStyle}
            >
                <LinearGradient
                    colors={[colors.softYellow, colors.hardYellow]}
                    start={[0, 0.5]}
                    end={[1, 0.5]}
                    style={[this.props.gradientStyle, styles.gradientFlex]}
                >

                <View style={styles.repoItem}>
                    <Text
                        style={styles.repoName}
                    >
                        {`${this.props.repo.full_name}`}
                    </Text>
                    <Text>{`${this.props.repo.description}`}</Text>
                </View>
                </LinearGradient>
            </TouchableHighlight>
        );
    }
}