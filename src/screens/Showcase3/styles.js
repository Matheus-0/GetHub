import { StyleSheet } from 'react-native';

import colors from '../../data/colors';

const styles = StyleSheet.create({
    buttonText: {
        color: 'black',
        fontSize: 15,
    },
    description: {
        color: '#fff',
        fontSize: 24,
        marginBottom: '5%',
        marginTop: '5%',
        width: '80%',
    },
    gradientButton: {
        alignItems: 'center',
        borderRadius: 50,
        padding: 15,
    },
    screen: {
        alignItems: 'center',
        backgroundColor: colors.background1,
        flex: 1,
        justifyContent: 'center',
    },
    touchable: {
        borderRadius: 50,
        bottom: 10,
        marginTop: 10,
        position: 'absolute',
        width: '50%',
    },
});

export default styles;
