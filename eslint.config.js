const reactPlugin = require('eslint-plugin-react');

module.exports = [
  {
    files: ['react/**/*.js'],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      ecmaVersion: 2015,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
      },
    },
    settings: {
      react: {
        version: '15',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/no-deprecated': 'warn',
    },
  },
  {
    files: ['gulpfile.js'],
    languageOptions: {
      ecmaVersion: 2015,
      sourceType: 'commonjs',
      globals: {
        require: 'readonly',
        module: 'readonly',
        exports: 'writable',
        console: 'readonly',
        __dirname: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
