import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
];

module.exports = {
    extends: ['./node_modules/@yandex/ymaps3-cli/.eslintrc.js'],
};
