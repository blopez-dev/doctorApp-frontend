module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'class-methods-use-this': 0,
    'comma-dangle': [2, 'never'],
    'no-underscore-dangle': 0,
    'no-shadow': 0,
    'object-curly-newline': 0,
    'react/prop-types': 0,
    'linebreak-style': 0,
    'global-require': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 0
  }
};
