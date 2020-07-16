module.exports = {
    env: {
        es2020: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'func-names': 0,
        'linebreak-style': 0,
        'no-unused-vars': 0,
        'react/destructuring-assignment': 0,
        'react/jsx-filename-extension': [1, {
            extensions: ['.js', '.jsx'],
        }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/prefer-stateless-function': 0,
        'react/prop-types': 0,
        'react/style-prop-object': 0,
    },
};
