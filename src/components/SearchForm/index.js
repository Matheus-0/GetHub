import React from 'react';
import {
    Text, TextInput, TouchableHighlight, View, 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { getNetworkStateAsync } from 'expo-network';

import { searchUsers } from '../../api/api';

import styles from './styles';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        state={
            itemName: '',
            searchNow: false,
        }
    }

    async componentDidUpdate(prevProps, prevState) {
        const { itemName, searchNow } = this.state;
        if (searchNow) {
            const users = await searchUsers(itemName);
            this.props.navigation.navigate('SecondSearchScreen', { users });
        }
    }

    render() {
        return (
            <View style={this.props.style}>
                <View style={styles.inputView}>
                    <Feather name="search" size={28} color="black" />
                    <TextInput
                        autoCapitalize="none"
                        placeholder="Search for a repository or user"
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        onChangeText={(item) => this.setState({ itemName: item })}
                    />
                </View>

                <TouchableHighlight
                    style={styles.touchable}
                    onPress={() => this.setState({ searchNow: true })}
                >
                    <LinearGradient
                        colors={['#555fa0', '#695596', '#503769']}
                        style={styles.gradientButton}
                    >
                        <Text style={styles.buttonText}>
                            Search
                        </Text>
                    </LinearGradient>
                </TouchableHighlight>
            </View>
        );
    }
};

export default SearchForm;
