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
    gradientStyle: {
        borderRadius: 10,
        padding: 15,
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
    },
    scrollView: {
        paddingHorizontal: 30,
        marginVertical: 40,
    },
    searchTitle: {
        alignSelf: 'center',
        color: colors.softLilac,
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 50,
    },
    touchableStyle: {
        borderRadius: 10,
        margin: 10,
    },
});

export default styles;
