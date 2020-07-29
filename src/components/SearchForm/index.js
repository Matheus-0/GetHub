import React from 'react';
import {
    Keyboard, Text, TextInput, TouchableHighlight, View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/native';

import { searchUsers } from '../../api/api';

import colors from '../../data/colors';
import styles from './styles';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemName: '',
        };
    }

    async handleSearchPress() {
        Keyboard.dismiss();

        setTimeout(async () => {
            const { itemName } = this.state;

            if (itemName.trim()) {
                this.props.showLoading();

                const users = await searchUsers(itemName);

                if (users) {
                    this.props.navigation.navigate('SecondSearchScreen', { itemName, users });

                    this.props.hideLoading();
                }
            }
        }, 100);
    }

    // eslint-disable-next-line class-methods-use-this
    goToNextScreen(itemName, users) {
        this.props.navigation.dispatch((state) => {
            // Remove the home route from the stack
            let { routes } = state;
            let removeNumber = 1;

            if (routes.length > 1) {
                routes = routes.filter((route) => route.name !== 'Showcase');
                removeNumber = 3;
            }

            return CommonActions.reset({
                ...state,
                routes,
                index: (routes.length - removeNumber) + 1,
            });
        });
    }

    render() {
        return (
            <View style={this.props.style}>
                <View style={styles.inputView}>
                    <Feather name="search" size={28} color="white" />

                    <TextInput
                        autoCapitalize="none"
                        placeholder="Search for user/repository"
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        onChangeText={(item) => this.setState({ itemName: item })}
                    />
                </View>

                <TouchableHighlight
                    style={styles.touchable}
                    onPress={() => this.handleSearchPress()}
                >
                    <LinearGradient
                        colors={[colors.hardYellow, colors.softOrange]}
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
}

export default SearchForm;
