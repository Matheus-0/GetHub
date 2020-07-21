import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    repoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: '85%',
        marginTop: 20,
        backgroundColor: 'green',
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
    },
    icons: {
        flexDirection: 'row',
    },
    textView: {
        flexDirection: 'row',
        flexShrink: 1,
        textAlign: 'left',
    },
    description: {
        color: 'white',
    },
});

export default styles;
