import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
    ignores: ["node_modules/**", "dist/**"],
    ...pluginJs.configs.recommended,
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
    },
  },
];
