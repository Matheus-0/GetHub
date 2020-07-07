import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttonText: {
        color: 'white',
        fontSize: 15,
    },
    gradientButton: {
        alignItems: 'center',
        borderRadius: 5,
        padding: 15,
    },
    inputView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: 5,
        height: 50,
        borderRadius: 5,
        margin: 10,
    },
    input: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10,
        paddingLeft: 5,
        borderRadius: 5,
    },
    touchable: {
        borderRadius: 5,
        marginTop: 10,
    },
});

export default styles;
