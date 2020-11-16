module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    test: true,
    expect: true,
    describe: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
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
    'import/prefer-default-export': 0,
  },
};
