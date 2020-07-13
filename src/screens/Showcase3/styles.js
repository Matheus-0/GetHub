import { StyleSheet } from 'react-native';

import colors from '../../data/colors';

const styles = StyleSheet.create({
    description: {
        color: '#fff',
        fontSize: 24,
        marginBottom: '20%',
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
        borderRadius: 5,
        marginTop: 10,
    },
});

export default styles;
