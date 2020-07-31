import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

import styles from './styles';
import colors from '../../data/colors';

export default function LoadingStatus({ style, text }) {
    return (
        <View style={[style, styles.loadingAnimation]}>
            <ActivityIndicator
                size="large"
                color={colors.hardYellow}
            />
            {text && <Text style={styles.loadingText}>{ text }</Text>}
        </View>
    );
}
