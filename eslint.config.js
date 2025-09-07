import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.browser,
      parser: parserTs,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: './tsconfig.eslint.json', // Corrigido para usar o tsconfig específico do ESLint
      },
    },
    plugins: {
      react: pluginReact,
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooks,
      prettier: pluginPrettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  // Desativa conflitos entre Prettier e ESLint
  prettierConfig,
]);
