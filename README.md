# @walidoux/eslint-config

⚙️ Walidoux's ESlint config.

[![npm](https://img.shields.io/npm/v/@walidoux/eslint-config?color=%230cf)](https://www.npmjs.com/package/@walidoux/eslint-config)[![license](https://img.shields.io/github/license/walidoux/eslint-config?color=%2385f)](https://github.com/walidoux/eslint-config/blob/main/LICENSE)

## Installation

```bash
YARN ➜  yarn add -D eslint @walidoux/eslint-config

NPM  ➜  npm install --save-dev eslint @walidoux/eslint-config
```

## Usage

Create a `.eslintrc` configuration and extend the base configuration.

```json
{ "extends": "@walidoux/eslint-config" }
```

When extending multiple configurations, keep the base configuration first.

```json
{
  "extends": ["@walidoux/eslint-config", "other-sort-of-plugin"]
}
```
