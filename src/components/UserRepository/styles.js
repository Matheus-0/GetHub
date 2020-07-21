import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    repoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: '85%',
        marginTop: 20,
        backgroundColor: 'orange',
        borderRadius: 20,
        flexWrap: 'wrap',
    },
    repoTitle: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    icons: {
        flexDirection: 'row',
    },
    textView: {
        alignItems: 'center',
    },
    textDescription: {
        textAlign: 'center',
        color: 'white',
        paddingLeft: 10,
        paddingRight: 10,
    },
});

export default styles;
