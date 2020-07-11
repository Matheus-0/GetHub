import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

import Icon from './icon';
import PageSelector from '../../components/PageSelector';
import SwitchShowcase from '../../components/SwitchShowcase';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.screen}>
            <Text style={styles.description}>And much more!</Text>
            <Icon />
            <PageSelector page={2} />
            <SwitchShowcase
                navigation={navigation}
                prevScreenName="Showcase2"
                nextScreenName={null}
            />
        </View>
    );
}
