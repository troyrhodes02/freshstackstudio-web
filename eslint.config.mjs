import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.config({
    extends: ["prettier"],
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "error",
      "@next/next/no-img-element": "off", // Allow img tags alongside next/image
      "react/no-unescaped-entities": "off", // Allow unescaped entities in JSX
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  }),
];

export default eslintConfig;
