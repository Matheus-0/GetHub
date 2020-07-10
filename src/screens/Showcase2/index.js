import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import Icon from './icon';
import PageSelector from '../../components/PageSelector';
import SwitchShowcase from '../../components/SwitchShowcase';

// eslint-disable-next-line react/prop-types
export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.screen}>
            <Text style={styles.description}>
                Check what is going on in your favorite repository
            </Text>
            <Icon />
            <PageSelector page={1} />
            <SwitchShowcase
                navigation={navigation}
                prevScreenName="Showcase1"
                nextScreenName="Showcase3"
            />
        </View>
    );
}
