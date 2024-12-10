import config from "eslint-config-standard";
import pluginVue from 'eslint-plugin-vue'


/** @type {import('eslint').Linter.Config[]} */
export default [
  ...pluginVue.configs['flat/recommended'],
  ...[].concat(config),
];
