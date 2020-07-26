import { StyleSheet } from 'react-native';

import colors from '../../data/colors';

const styles = StyleSheet.create({
    buttonText: {
        color: 'black',
        fontSize: 15,
    },
    gradientButton: {
        alignItems: 'center',
        borderRadius: 5,
        padding: 15,
    },
    input: {
        color: 'white',
        flex: 1,
        padding: 10,
        paddingLeft: 10,
        borderRadius: 5,
    },
    inputView: {
        alignItems: 'center',
        borderColor: colors.hardYellow,
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 10,
        paddingLeft: 5,
    },
    touchable: {
        borderRadius: 5,
        marginTop: 10,
    },
});

export default styles;
