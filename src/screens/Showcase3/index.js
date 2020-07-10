import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import Icon from './icon';
import PageSelector from '../../components/PageSelector';
import SwitchShowcase from '../../components/SwitchShowcase';

// eslint-disable-next-line react/prop-types
export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.screen}>
            <Text style={styles.description}>And much more!</Text>
            <Icon />
            <PageSelector page={2} />
            <SwitchShowcase
                navigation={navigation}
                prevScreenName="Showcase2"
                nextScreenName={null}
            />
            <TouchableOpacity
                onPress={() => { alert('Go to Login') }}
                style={styles.touchable}
            >
                <LinearGradient
                    colors={['#54521a', '#fa4a51', '#313131']}
                    style={styles.gradientButton}
                >
                    <Text style={styles.buttonText}>
                        Start now!
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}
