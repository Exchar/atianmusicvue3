module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "vue/setup-compiler-macros": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "parser": "@typescript-eslint/parser"
  },
  "plugins": [
    "vue"
  ],
  "globals": { defineOptions: 'writable' },
  "rules": {
    "semi": ["warn","always"],
    "indent": ["error", 2],
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["index","Layout"], //需要忽略的组件名
      },
    ],
    "vue/no-multiple-template-root":'off',
    "vue/no-v-model-argument": 0
  }
}