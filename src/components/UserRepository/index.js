import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../../data/colors';
import languageColors from '../../data/languageColors';
import styles from './styles';

import openOnBrowser from '../../utils/openOnBrowser';
import parseDate from '../../utils/parseDate';
import parseRepoSize from '../../utils/parseRepoSize';
import shadeColor from '../../utils/shadeColor';

const DEFAULT_REPOSITORY_COLOR = '#ffffff';

function UserRepository({ repository }) {
    const iconSize = 20;

    // First, need to check if repository has a language, if not, set a default color
    const languageColor = repository.language
        ? languageColors[repository.language].color
        : DEFAULT_REPOSITORY_COLOR;

    // Now we need to check if we could successfully get a color, if not, set default
    const darkerLanguageColor = languageColor
        ? shadeColor(languageColor, -75)
        : DEFAULT_REPOSITORY_COLOR;

    return (
        <TouchableHighlight
            onPress={() => openOnBrowser(repository.html_url)}
            style={styles.repoContainerTouchable}
        >
            <LinearGradient
                colors={[languageColor, darkerLanguageColor]}
                start={[0, 1]}
                end={[1, 0]}
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
                            color={colors.softBlue}
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

                        {/* <View style={styles.textView}>
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
                        </View> */}
                    </View>

                    {repository.language && (
                        <View style={styles.languageView}>
                            <AntDesign name="codesquareo" size={24} color="white" />
                            <Text style={styles.languageText}>{repository.language}</Text>
                        </View>
                    )}
                </View>
            </LinearGradient>
        </TouchableHighlight>
    );
}

export default UserRepository;
