import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

const leftActionHandler = (prevScreenName, navigation) => {
    if (prevScreenName) { return navigation.goBack(); }
};

const rightActionHandler = (nextScreenName, navigation) => {
    if (nextScreenName) { return navigation.navigate(nextScreenName); }
};

export default function SwitchShowcase({ navigation, prevScreenName = null, nextScreenName = null, }) {
    return (
        <View style={styles.buttons}>
            {prevScreenName && (
                <TouchableOpacity onPress={() => leftActionHandler(prevScreenName, navigation)}>
                    <Feather color="#fff" size={32} name="chevrons-left" />
                </TouchableOpacity>
            )}
            {nextScreenName && (
                <TouchableOpacity onPress={() => rightActionHandler(nextScreenName, navigation)}>
                    <Feather color="#fff" size={32} name="chevrons-right" />
                </TouchableOpacity>
            )}
        </View>
    );
}
