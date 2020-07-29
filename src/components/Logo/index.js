import React from 'react';
import { Image } from 'react-native';

import styles from './styles';

const logo = require('../../../assets/logo.png');

export default function Logo({ style, isHeader = false }) {
    return (
        <Image
            style={isHeader ? styles.header : styles.normal}
            source={logo}
        />
    );
}
