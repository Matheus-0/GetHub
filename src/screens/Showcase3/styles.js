import { StyleSheet } from 'react-native';

import colors from '../../data/colors';

const styles = StyleSheet.create({
    description: {
        color: '#fff',
        fontSize: 24,
        marginTop: '5%',
        marginBottom: '5%',
        width: '80%',
    },
    screen: {
        alignItems: 'center',
        backgroundColor: colors.background1,
        flex: 1,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
    },
    gradientButton: {
        alignItems: 'center',
        borderRadius: 5,
        padding: 15,
    },
    touchable: {
        position: 'absolute',
        bottom: 10,
        borderRadius: 20,
        marginTop: 10,
        width: '50%',
    },
});

export default styles;
