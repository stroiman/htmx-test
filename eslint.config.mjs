import globals from "globals";
import pluginJs from "@eslint/js";
import mochaPlugin from "eslint-plugin-mocha";

export default [
  mochaPlugin.configs.flat.recommended,
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  {
    rules: {
      "mocha/no-mocha-arrows": "off",
    },
  },
];

