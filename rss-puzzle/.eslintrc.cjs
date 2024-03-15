module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'unused-imports', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        'unused-imports/no-unused-imports': 'warn',
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            overrides: {
              accessors: 'explicit',
              constructors: 'no-public',
              properties: 'explicit',
              parameterProperties: 'explicit',
            },
          },
        ],
      },
    },
    {
      files: ['*.ts', '*.html'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'lf',
          },
        ],
        'object-curly-newline': [
          'error',
          {
            consistent: true
          }
        ],
        '@typescript-eslint/consistent-type-imports': 'error',
      },
    },
  ],
};
