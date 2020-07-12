import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    form: {
        width: '80%',
    },
    gradient: {
        height: Dimensions.get('window').height,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
    },
    screen: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
    },
});

export default styles;
