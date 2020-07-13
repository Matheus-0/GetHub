import { StyleSheet } from 'react-native';

import colors from '../../data/colors';

const styles = StyleSheet.create({
    pageSelector: {
        alignItems: 'center',
        backgroundColor: colors.softRed,
        borderRadius: 50,
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-around',
        marginTop: 50,
        width: 100,
    },
    selector: {
        backgroundColor: colors.green,
        borderRadius: 10,
        height: 20,
        width: 20,
    },
});

export default styles;
