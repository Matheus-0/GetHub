import React from 'react';
import { View, Text } from 'react-native';

import colors from '../../data/colors';
import styles from './styles';

const showcaseScreens = ['findUsers', 'seeGitInfo', 'seeRepositories'];

function Selector({ color=colors.green }) {
    return (
        <View style={[styles.selector, { backgroundColor: color }]} />
    );
}

export default function PageSelector({ page }) {
    return (
        <View style={styles.pageSelector}>
            {showcaseScreens.map((value, index) => {
                // eslint-disable-next-line no-unused-expressions
                return (page === index) ? <Selector key={index} /> : <Selector key={index} color="white" />;
            })}
        </View>
    );
}
