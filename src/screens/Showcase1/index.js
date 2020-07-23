import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

import Icon from './icon';
import PageSelector from '../../components/PageSelector';
import SwitchShowcase from '../../components/SwitchShowcase';
import Logo from '../../components/Logo';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.screen}>
            <Logo />
            <Text style={styles.description}>Find users and repositories on GitHub</Text>
            <Icon />
            <PageSelector page={0} />
            <SwitchShowcase
                navigation={navigation}
                prevScreenName={null}
                nextScreenName="Showcase2"
            />
        </View>
    );
}
