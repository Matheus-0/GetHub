import { Dimensions } from 'react-native';

const iconSize = {
    height: Math.round(Dimensions.get('window').height * 0.4),
    width: Math.round(Dimensions.get('window').width * 0.6),
    viewHeight: Math.round(Dimensions.get('window').height * 0.45),
    viewWidth: Math.round(Dimensions.get('window').width * 0.5),

};

export default iconSize;
