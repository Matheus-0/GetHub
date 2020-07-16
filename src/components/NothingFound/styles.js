import { StyleSheet } from 'react-native';

import colors from '../../data/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    nothingFound: {
        fontSize: 30,
        color: 'white',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
    },
});

export default styles;
