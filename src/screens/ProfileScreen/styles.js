import { Dimensions, StyleSheet } from 'react-native';

import colors from '../../data/colors';

const styles = StyleSheet.create({
    gradient: {
        height: Dimensions.get('window').height,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
    },
    openProfileText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    openProfileTouchable: {
        backgroundColor: colors.hardYellow,
        borderRadius: 20,
        marginBottom: 30,
        paddingHorizontal: 70,
        paddingVertical: 5,
    },
    publicText: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 30,
    },
});

export default styles;
