import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttonText: {
        color: 'white',
        fontSize: 15,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: Dimensions.get('window').height,
    },
    gradientButton: {
        alignItems: 'center',
        borderRadius: 5,
        padding: 15,
    },
    icon: {
        marginBottom: 15,
    },
    screen: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    touchable: {
        alignSelf: 'center',
        borderRadius: 5,
        bottom: '5%',
        width: '50%',
    },
    warning: {
        fontSize: 20,
        textAlign: 'center',
    },
});

export default styles;
