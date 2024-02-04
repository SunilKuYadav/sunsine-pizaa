module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  ignorePatterns: [".eslintrc.js"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    project: "./tsconfig.json", // Specify the path to your tsconfig.json file (use './' to indicate the current directory)
  },
  plugins: ["@typescript-eslint", "import"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "enumMember",
        format: ["UPPER_CASE"],
      },
      {
        selector: "enum",
        format: ["PascalCase"],
      },
    ],
    "@typescript-eslint/ban-ts-comment": "warn",
    "comma-dangle": "off",
    "@typescript-eslint/no-duplicate-enum-values": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", ["parent", "sibling"]],
        pathGroups: [
          {
            pattern: "react+(|-native)",
            group: "external",
            position: "before",
          },
        ],
        "newlines-between": "always",
      },
    ],
    "import/exports-last": ["error"],
    "import/no-unused-modules": ["error", { unusedExports: true }],
    "import/no-default-export": ["error"],
    "import/no-absolute-path": ["error"],
  },
};
