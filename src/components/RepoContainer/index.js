import React from 'react';
import {
    Image, Text, TouchableHighlight, View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../../data/colors';
import styles from './styles';

import openOnBrowser from '../../utils/openOnBrowser';

export default class RepoContainer extends React.Component {
    render() {
        return (
            <TouchableHighlight
                onPress={() => openOnBrowser(this.props.repo.html_url)}
                style={this.props.touchableStyle}
            >
                <LinearGradient
                    colors={[colors.softYellow, colors.softOrange]}
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
                        {this.props.repo.description && <Text>{`${this.props.repo.description}`}</Text>}
                    </View>
                </LinearGradient>
            </TouchableHighlight>
        );
    }
}
