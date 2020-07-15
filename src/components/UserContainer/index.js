import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
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
                    style={this.props.gradientStyle}
                >
                    <Text>
                        {`Username: ${this.props.user.login}`}
                    </Text>
                    <Text>
                        {`URL: ${this.props.user.html_url}`}
                    </Text>
                </LinearGradient>
            </TouchableHighlight>
        );
    }
}
