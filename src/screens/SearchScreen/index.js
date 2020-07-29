import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import LoadingStatus from '../../components/LoadingStatus';
import Logo from '../../components/Logo';
import SearchForm from '../../components/SearchForm';

import colors from '../../data/colors';
import styles from './styles';

export default class SearchScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            navigation: this.props.navigation,
        };
    }

    render() {
        const { loading, navigation } = this.state;

        return (
            <>
                <View style={styles.screen}>
                    <LinearGradient
                        colors={['#1e1e1e', '#0f0f0f']}
                        start={[0.6, 0.3]}
                        end={[0.3, 0.7]}
                        style={styles.gradient}
                    />

                    <Logo />

                    <SearchForm
                        style={styles.form}
                        navigation={navigation}
                        hideLoading={() => this.setState({ loading: false })}
                        showLoading={() => this.setState({ loading: true })}
                    />

                    {loading && <LoadingStatus style={{ position: 'absolute', bottom: 40 }} text="Searching now..." />}
                </View>
            </>
        );
    }
}
