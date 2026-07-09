// eslint.config.js
import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      prettier: prettierPlugin,
    },
    rules: {
      ...ts.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },
  {
    rules: {
      ...prettierConfig.rules,
    },
  },
];
