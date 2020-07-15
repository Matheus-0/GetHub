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
    screen: {
        flex: 1,
        justifyContent: 'center',
    },
    scrollView: {
        paddingHorizontal: 30,
        paddingVertical: 50,
    },
    userView: {
        backgroundColor: colors.softYellow,
        borderRadius: 10,
        margin: 10,
        paddingLeft: 20,
        paddingVertical: 10,
    },
});

export default styles;
