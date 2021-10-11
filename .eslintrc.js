module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
        jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        indent: 'off',
        'react/jsx-filename-extension': 0,
        'react/jsx-indent': 0,
        'react/no-unused-state': 0,
        'react/state-in-constructor': 0,
        'react/jsx-indent-props': 0,
        'no-restricted-globals': 0,
        'react/destructuring-assignment': 0,
        'react/forbid-prop-types': 0,
    },
};
