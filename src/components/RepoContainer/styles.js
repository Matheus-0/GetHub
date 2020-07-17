import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    repoItem: { 
        flex: 3,
        maxHeight: 100,
        overflow: 'scroll',
    },
    repoName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    gradientFlex: {
        flexDirection: 'row',
    },
});

export default styles;
