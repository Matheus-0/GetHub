import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import Icon from './icon';
import PageSelector from '../../components/PageSelector';
import SwitchShowcase from '../../components/SwitchShowcase';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.screen}>
            <Text style={styles.description}>Find users and repositories on GitHub</Text>
            <Icon />
            <PageSelector page={0} />
            <SwitchShowcase 
                navigation={navigation}
                prevScreenName={'ShowCase1'}
                nextScreenName={'Showcase3'} 
            />
        </View>
    );
}
