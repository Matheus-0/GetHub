import { StyleSheet } from 'react-native';

import colors from '../../data/colors';

const styles = StyleSheet.create({
    description: {
        fontSize: 24,
        color: '#fff',
        width: '80%',
        marginTop: '5%',
        marginBottom: '5%',
    },
    screen: {
        alignItems: 'center',
        backgroundColor: colors.background1,
        flex: 1,
        justifyContent: 'center',
    },
});

export default styles;
