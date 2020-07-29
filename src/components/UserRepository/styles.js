import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    repoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        borderRadius: 20,
        flexWrap: 'wrap',
    },
    repoContainerGradient: {
        borderRadius: 20,
    },
    repoContainerTouchable: {
        borderRadius: 20,
        marginBottom: 20,
    },
    repoTitle: {
        flexDirection: 'row',
        marginBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    icons: {
        flexDirection: 'row',
        position: 'absolute',
        right: 10,
        top: 10,
    },
    itemCount: {
        marginRight: 5,
        fontSize: 16,
        paddingLeft: 4,
        paddingRight: 2,
        color: 'white',
    },
    languageText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    languageView: {
        bottom: 15,
        flexDirection: 'row',
        position: 'absolute',
        right: 15,
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
