import React from 'react';
import { View } from 'react-native';

import colors from '../../data/colors';
import styles from './styles';

const showcaseScreens = ['findUsers', 'seeGitInfo', 'seeRepositories'];

function Selector({ color = colors.green }) {
    return (
        <View style={[styles.selector, { backgroundColor: color }]} />
    );
}

export default function PageSelector({ page }) {
    return (
        <View style={styles.pageSelector}>
            {/* eslint-disable-next-line react/no-array-index-key */}
            {showcaseScreens.map((value, index) => ((page === index) ? <Selector key={index} /> : <Selector key={index} color="white" />))}
        </View>
    );
}
