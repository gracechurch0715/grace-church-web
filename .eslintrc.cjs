module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-unused-vars": 1, // 사용하는 곳 없을 때 규칙. / 0 : 끔 ,  1 : 경고, 2 : 오류나타남
    "react-hooks/exhaustive-deps": "warn", // useEffect 의존성 규칙
    "react-native/no-inline-styles": 0,
    "react/no-unstable-nested-components": "off",
  },
};
