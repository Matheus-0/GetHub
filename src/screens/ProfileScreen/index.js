import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <View style={styles.screen}>
                <Text>Initial code.</Text>
            </View>
        );
    }
}
