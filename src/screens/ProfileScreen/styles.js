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
    repositoriesView: {
        flex: 9,
    },
    openProfileText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    openProfileTouchable: {
        backgroundColor: colors.hardYellow,
        borderRadius: 20,
        paddingHorizontal: 70,
        paddingVertical: 5,
    },
    openProfileView: {
        flex: 2,
    },
    publicText: {
        color: 'white',
        fontWeight: 'bold',
    },
    publicView: {
        flex: 1,
        width: '100%',
    },
    screen: {
        flex: 1,
    },
});

export default styles;
