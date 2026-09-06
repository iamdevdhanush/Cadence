import js from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'

export default [
  js.configs.recommended,
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      '@next/next/no-html-link-for-pages': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
  {
    ignores: ['.next/', 'node_modules/', 'out/'],
  },
  {
    files: ['*.config.js', '*.config.ts'],
    languageOptions: {
      globals: {
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
      },
    },
  },
]