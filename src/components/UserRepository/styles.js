import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    repoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: '90%',
        marginTop: 20,
        backgroundColor: 'green',
    },
    repoTitle: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    icons: {
        flexDirection: 'row',
    },
});

export default styles;
