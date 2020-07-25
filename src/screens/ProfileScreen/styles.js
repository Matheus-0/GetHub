import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    gradient: {
        height: Dimensions.get('window').height,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
    },
    openProfileText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    openProfileTouchable: {
        backgroundColor: 'darkgray',
        borderRadius: 20,
        paddingHorizontal: 70,
        paddingVertical: 5,
    },
    openProfileView: {
        alignItems: 'center',
        flex: 2,
        justifyContent: 'center',
    },
    publicText: {
        color: 'white',
        fontWeight: 'bold',
    },
    publicView: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    screen: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});

export default styles;
