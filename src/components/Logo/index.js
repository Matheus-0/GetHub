import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Logo({ style }) {
    return (
        <Image
            style={styles.normal}
            source={require('../../../assets/logo.png')}
        />
    );
}
