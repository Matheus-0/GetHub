import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    gradient: {
        height: Dimensions.get('window').height,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
    },
    scrollView: {
        paddingLeft: 20,
        paddingVertical: 50,
    },
    userView: {
        marginBottom: 10,
    },
});

export default styles;
