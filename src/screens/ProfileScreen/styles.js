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
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});

export default styles;
