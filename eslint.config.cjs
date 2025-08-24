// eslint.config.cjs
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const tailwindPlugin = require('eslint-plugin-tailwindcss');

module.exports = [
    {
        files: ['**/*.{js,jsx}'],
        ignores: ['node_modules/**', 'dist/**'],

        languageOptions: {
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
            globals: {
                window: 'readonly',
                document: 'readonly',
            },
        },

        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            tailwindcss: tailwindPlugin,
        },

        rules: {
            'tailwindcss/no-custom-classname': 'error',
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
        },

        settings: {
            tailwindcss: {
                config: './tailwind.config.js',
                callees: ['clsx', 'classnames', 'ctl'],
            },
            react: { version: 'detect' },
        },
    },
];
