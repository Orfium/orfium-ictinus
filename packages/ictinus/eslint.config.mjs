import * as emotion from '@emotion/eslint-plugin';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import _import from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommended,
      fixupConfigRules(
        compat.extends(
          'eslint:recommended',
          'prettier',
          'plugin:react-hooks/recommended',
          'plugin:react/recommended',
          'plugin:import/typescript'
        )
      ),
    ],

    plugins: {
      react: fixupPluginRules(react),
      '@emotion': fixupPluginRules(emotion),
      import: fixupPluginRules(_import),
      'unused-imports': unusedImports,
    },

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.jasmine,
        ...globals.jest,
      },

      ecmaVersion: 2022,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    settings: {
      react: {
        pragma: 'React',
        version: 'detect',
      },

      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },

    rules: {
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',

      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/consistent-type-imports': 'error',

      'react/no-unknown-property': [
        'error',
        {
          ignore: ['css'],
        },
      ],

      'react/no-direct-mutation-state': 'error',
      'react/no-unused-prop-types': 'warn',

      'react/self-closing-comp': [
        'warn',
        {
          component: true,
          html: true,
        },
      ],

      'react/prop-types': 'off',
      'react/button-has-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/no-array-index-key': 'warn',
      'react/no-render-return-value': 0,
      'react/jsx-key': 'error',
      'react/jsx-curly-brace-presence': ['error', 'never'],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-children-prop': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: 'function',
          next: '*',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'function',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
      ],

      'no-debugger': 'warn',
      'no-console': 'warn',

      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: ['variable', 'parameter', 'property'],
          types: ['boolean'],
          format: ['PascalCase'],
          prefix: ['is', 'has'],
        },
      ],

      '@typescript-eslint/no-unused-expressions': [
        'warn',
        {
          allowShortCircuit: false,
          allowTernary: false,
          allowTaggedTemplates: false,
        },
      ],

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^__',
          varsIgnorePattern: '^__|React',
        },
      ],

      '@typescript-eslint/ban-ts-ignore': 0,
      '@typescript-eslint/no-empty-function': 0,
      '@typescript-eslint/camelcase': 0,
      '@typescript-eslint/prefer-interface': 0,
      '@typescript-eslint/no-inferrable-types': 0,
      '@typescript-eslint/explicit-member-accessibility': 0,
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/ban-ts-comment': 'warn',
    },
  },
]);
