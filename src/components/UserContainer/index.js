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
                    <View style={{ flex: 1 }}>
                        <Image
                            source={{ uri: this.props.user.avatar_url }}
                            style={styles.image}
                        />
                    </View>

                    <View style={styles.itemUser}>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                            }}
                        >
                            {`${this.props.user.login}`}
                        </Text>
                        <Text>
                            {`URL: ${this.props.user.html_url}`}
                        </Text>
                    </View>
                </LinearGradient>
            </TouchableHighlight>
        );
    }
}
