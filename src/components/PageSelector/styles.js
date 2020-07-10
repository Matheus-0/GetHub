import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../data/colors';

const styles = StyleSheet.create({
    selector: {
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: colors.green,
    },
    pageSelector: {
        height: 40,
        width: 100,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: colors.softRed,
        marginTop: 50,
    },
});

export default styles;
