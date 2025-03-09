import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

export default tseslint.config(
  { ignores: ['.next', 'node_modules'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, prettierConfig],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020
    },
    plugins: {
      'react-hooks': reactHooks,
      prettier: prettierPlugin
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          usePrettierrc: false,
          fileInfoOptions: {
            withNodeModules: true
          }
        }
      ],
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
)
