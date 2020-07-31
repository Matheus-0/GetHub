import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bio: {
        color: 'white',
        fontSize: 10,
        textAlign: 'center',
        width: '90%',
    },
    container: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
    },
    containerItem: {
        alignItems: 'center',
        flex: 1,
    },
    image: {
        borderRadius: 50,
        height: 100,
        width: 100,
    },
    locationText: {
        color: 'white',
        marginLeft: 5,
        textAlign: 'center',
    },
    locationView: {
        flexDirection: 'row',
        marginTop: 10,
    },
    username: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default styles;
