import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../../data/colors';
import styles from './styles';

import openOnBrowser from '../../utils/openOnBrowser';
import parseDate from '../../utils/parseDate';
import parseRepoSize from '../../utils/parseRepoSize';
import languageColors from '../../data/languageColors';

function UserRepository({ repository }) {
    const iconSize = 24;

    return (
        <TouchableHighlight
            onPress={() => openOnBrowser(repository.html_url)}
            style={styles.repoContainerTouchable}
        >
            <LinearGradient
                colors={['orange', 'darkorange']}
                start={[0, 0.5]}
                end={[1, 0.5]}
                style={styles.repoContainerGradient}
            >
                <View style={styles.repoContainer}>
                    <View style={styles.icons}>
                        <Feather
                            name="package"
                            size={iconSize}
                            color={colors.softYellow}
                        />
                        <Text style={styles.itemCount}>
                            { parseRepoSize(repository.size) }
                        </Text>

                        <Feather
                            name="star"
                            size={iconSize}
                            color={colors.softLilac}
                        />

                        <Text style={styles.itemCount}>
                            {repository.watchers_count}
                        </Text>

                        <Feather
                            name="eye"
                            size={iconSize}
                            color={colors.hardBlue}
                        />

                        <Text style={styles.itemCount}>
                            {repository.stargazers_count}
                        </Text>

                        <Feather
                            name="git-branch"
                            size={iconSize}
                            color={repository.fork ? colors.green : colors.softRed}
                        />
                    </View>

                    <View style={styles.repoTitle}>
                        <Text style={styles.title}>{repository.name}</Text>
                    </View>

                    <View style={{ width: '100%', maxWidth: '100%' }}>
                        <View style={[styles.textView, { marginBottom: 10 }]}>
                            <Text style={styles.textDescription}>
                                {repository.description}
                            </Text>
                        </View>

                        <View style={styles.textView}>
                            <Text style={styles.textDescription}>
                                <Text style={{ fontWeight: 'bold' }}>
                                    {'Last update: '}
                                    <Text style={{ fontWeight: 'normal' }}>
                                        { parseDate(repository.updated_at)}
                                    </Text>
                                </Text>
                            </Text>
                        </View>

                        <View style={styles.textView}>
                            <Text style={styles.textDescription}>
                                <Text style={{ fontWeight: 'bold' }}>
                                    {'Created at: '}
                                    <Text style={{ fontWeight: 'normal' }}>
                                        { parseDate(repository.created_at) }
                                    </Text>
                                </Text>
                            </Text>
                        </View>

                        {repository.language && (
                            <View style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginTop: 8,
                            }}
                            >
                                <FontAwesome
                                    name="circle"
                                    size={16}
                                    color={languageColors[repository.language].color}
                                />

                                <View style={styles.textView}>
                                    <Text
                                        style={
                                            [styles.textDescription, { fontSize: 16 }]
                                        }
                                    >
                                        <Text style={{ fontWeight: 'normal' }}>
                                            {repository.language}
                                        </Text>
                                    </Text>
                                </View>
                            </View>
                        )}
                    </View>
                </View>
            </LinearGradient>
        </TouchableHighlight>
    );
}

export default UserRepository;
