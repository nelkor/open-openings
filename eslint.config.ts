import globals from 'globals'
import eslint from '@eslint/js'
import ts from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
import type { ESLint } from 'eslint'
import { defineConfig } from 'eslint/config'
import prettier from 'eslint-plugin-prettier'
import { importX } from 'eslint-plugin-import-x'
import prettierConfig from 'eslint-config-prettier'
import perfectionist from 'eslint-plugin-perfectionist'

export default defineConfig(
  { ignores: ['dist/**', 'node_modules/**'] },
  {
    plugins: {
      vue,
      prettier,
      perfectionist,
      import: importX as unknown as ESLint.Plugin,
    },
    extends: [
      eslint.configs.recommended,
      ...ts.configs.recommended,
      ...vue.configs['flat/recommended'],
    ],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: { parser: ts.parser },
    },
  },
  {
    // common
    rules: {
      'camelcase': 2,
      'prefer-template': 2,
    },
  },
  {
    // prettier
    rules: {
      'prettier/prettier': 2,
    },
  },
  {
    // import
    rules: {
      'import/first': 2,
      'import/newline-after-import': 2,
    },
  },
  {
    // perfectionist
    rules: {
      'perfectionist/sort-objects': [2, { order: 'asc', type: 'line-length' }],
      'perfectionist/sort-exports': [2, { order: 'asc', type: 'line-length' }],
      'perfectionist/sort-interfaces': [
        2,
        { order: 'asc', type: 'line-length' },
      ],
      'perfectionist/sort-switch-case': [
        2,
        { order: 'asc', type: 'line-length' },
      ],
      'perfectionist/sort-named-exports': [
        2,
        { order: 'asc', type: 'line-length' },
      ],
      'perfectionist/sort-named-imports': [
        2,
        { order: 'asc', type: 'line-length' },
      ],
      'perfectionist/sort-array-includes': [
        2,
        { order: 'asc', type: 'line-length' },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          order: 'asc',
          newlinesBetween: 1,
          type: 'line-length',
          groups: [
            ['type-builtin', 'value-builtin'],
            ['type-external', 'value-external'],
            ['type-internal', 'value-internal', 'tsconfig-path'],
            [
              'type-parent',
              'type-index',
              'value-index',
              'type-sibling',
              'value-parent',
              'value-sibling',
            ],
          ],
        },
      ],
    },
  },
  prettierConfig,
  {
    // vue
    files: ['**/*.vue'],
    rules: {
      'vue/html-indent': 2,
      'vue/attributes-order': 2,
      'vue/order-in-components': 2,
      'vue/attribute-hyphenation': 2,
      'vue/no-empty-component-block': 2,
      'vue/html-self-closing': [
        'error',
        {
          svg: 'always',
          math: 'always',
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
        },
      ],
    },
  },
)
