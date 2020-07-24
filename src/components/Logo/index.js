import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Logo({ style, isHeader = false }) {
    return (
        <Image
            style={isHeader ? styles.header : styles.normal}
            // eslint-disable-next-line global-require
            source={require('../../../assets/logo.png')}
        />
    );
}
