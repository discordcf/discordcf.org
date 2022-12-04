module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:astro/recommended"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        semi: ["error", "always"],
        "comma-dangle": ["error", "only-multiline"],
        quotes: ["error", "double"],
        "space-before-function-paren": "off",
        "import/no-absolute-path": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json",
  },
  rules: {
    "multiline-ternary": "off",
    quotes: ["error", "double"],
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/no-useless-constructor": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
  },
};
