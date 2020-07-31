import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    errorView: {
        position: 'absolute',
        backgroundColor: '#2f3f1f',
        bottom: 0,
        width: '100%',
    },
    errorText: {
        paddingTop: 3,
        paddingBottom: 3,
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
    },
});

export default styles;
