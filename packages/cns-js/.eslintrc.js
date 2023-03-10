
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    env: {
        node: true,
        browser: true,
        jest: true,
        es6: true
    },
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
};