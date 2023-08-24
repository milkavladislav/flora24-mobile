module.exports = {
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['react', 'react-hooks'],
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    rules: {
    },
  };
  