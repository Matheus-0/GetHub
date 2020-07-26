import { Dimensions, StyleSheet } from 'react-native';

import colors from '../../data/colors';

const styles = StyleSheet.create({
    gradient: {
        height: Dimensions.get('window').height,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
    },
    gradientStyle: {
        borderRadius: 10,
        padding: 15,
    },
    input: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10,
        paddingLeft: 10,
        borderRadius: 5,
    },
    inputView: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 10,
        paddingLeft: 5,
        width: '60%',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pickerView: {
        height: 50,
        width: '33%',
        borderRadius: 5,
        overflow: 'hidden',
        textAlign: 'center',
    },
    pickerOption: {
        flex: 1,
        backgroundColor: colors.softOrange,
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
    },
    scrollView: {
        paddingHorizontal: 30,
    },
    scrollViewParent: {
        flex: 9,
    },
    searchInputView: {
        alignItems: 'center',
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    touchableStyle: {
        borderRadius: 10,
        margin: 10,
    },
});

export default styles;
