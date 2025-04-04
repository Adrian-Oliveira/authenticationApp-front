module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', "unused-imports", "eslint-plugin-react"],
  rules: {
    'react-refresh/only-export-components': 'warn',
    //"no-unused-vars": "error", // or "@typescript-eslint/no-unused-vars": "off",
    'no-useless-catch':'off',
    '@typescript-eslint/ban-ts-comment':'off',
    "unused-imports/no-unused-imports": "error",
    'unused-imports/no-unused-imports-ts': 2,
    "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": true }],
    "unused-imports/no-unused-vars":  [
        "error",
        {
            "vars": "all",
            "varsIgnorePattern": "^_",
            "args": "after-used",
            "argsIgnorePattern": "^_",
        },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": true }],//"off",
    '@typescript-eslint/no-explicit-any': 'off',
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2
  },
}
