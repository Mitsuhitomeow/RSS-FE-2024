module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: '2018',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint-config-airbnb-base',
    'eslint-config-prettier',
    'airbnb-typescript/base',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['*.ts'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'error', // Ругаться на отсутствие типов у возвращаемых функций
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }], // Ругаться на отсутствие типов у функций
    '@typescript-eslint/no-explicit-any': 'error', // Ругаться на использование типа "any"
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'lf',
      },
    ],
  },
};
