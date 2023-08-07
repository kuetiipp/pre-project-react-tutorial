module.exports = {
    root: true,
    extends: [
      'plugin:@reactt-eslint/eslint-recommended',
      'plugin:@react-eslint/recommended',
    ],
    plugins: ['prettier', '@react-eslint'],
    rules: {
      'prettier/prettier': [
        'error',
        {
          doubleQuote: true,
          tabWidth: 2,
          printWidth: 80,
          bracketSpacing: true,
          arrowParens: 'avoid',
        },
      ],
      '@react-eslint/no-explicit-any': 'off',
      '@react-eslint/explicit-function-return-type': 'off',
      'prefer-const': 'off',
    },
    parserOptions: {
      parser: '@react-eslint/parser',
    },
  };