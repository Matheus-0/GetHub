import { Dimensions, StyleSheet } from 'react-native';
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
});

export default styles;
