module.exports = {
  extends: ['conventions', 'prettier'],
  plugins: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json'
  },
  env: {
    node: true,
    browser: true
  },
  rules: {
    'prettier/prettier': 'error'
  }
}
