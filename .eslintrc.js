module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  globals: {
    test: false,
    expect: false,
  },
  rules: { 'react/prop-types': 'off' },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
