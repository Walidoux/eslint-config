module.exports = {
  extends: ['conventions', 'prettier'],
  plugins: ['prettier'],
  env: {
    node: true,
    browser: true
  },
  rules: {
    'prettier/prettier': 'error'
  }
}
