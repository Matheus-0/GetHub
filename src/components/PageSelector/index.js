import React from 'react';
import { View, Text } from 'react-native';

import colors from '../../data/colors';
import styles from './styles';

const showcaseScreens = ['findUsers', 'seeGitInfo', 'seeRepositories'];

// eslint-disable-next-line react/prop-types
function Selector({ color = colors.green }) {
    return (
        <View style={[styles.selector, { backgroundColor: color }]} />
    );
}

// eslint-disable-next-line react/prop-types
export default function PageSelector({ page }) {
    return (
        <View style={styles.pageSelector}>
            {showcaseScreens.map((value, index) => {
                return (page === index) ? <Selector key={index} /> : <Selector key={index} color="white" />;
            })}
        </View>
    );
}
