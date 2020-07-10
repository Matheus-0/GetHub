import { StyleSheet } from 'react-native';
import colors from '../../data/colors';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background1,
    },
    description: {
        fontSize: 24,
        color: '#fff',
        width: '80%',
        marginBottom: '20%',
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
