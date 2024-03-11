module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'unused-imports', 'simple-import-sort', 'prettier', 'unicorn'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
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
        '@typescript-eslint/consistent-type-imports': 'error',
      },
    },
  ],
};