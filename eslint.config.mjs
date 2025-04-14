import nrwlNx from "@nrwl/eslint-plugin-nx";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/node_modules",
        "**/package.json",
        "**/package-lock.json",
        "**/dist",
        "e2e/**/*",
        "**/karma.conf.js",
        "**/commitlint.config.js",
    ],
}, {
    plugins: {
        "@nrwl/nx": nrwlNx,
    },
}, {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],

    rules: {
        "@nrwl/nx/enforce-module-boundaries": ["error", {
            enforceBuildableLibDependency: true,
            allow: [],

            depConstraints: [{
                sourceTag: "*",
                onlyDependOnLibsWithTags: ["*"],
            }],
        }],

        "no-inferrable-types": 0,
        "directive-selector": [0, "attribute", "app", "camelCase"],

        "@typescript-eslint/no-inferrable-types": [2, {
            ignoreParameters: true,
        }],
    },
}, ...compat.extends("plugin:@nrwl/nx/typescript").map(config => ({
    ...config,
    files: ["**/*.ts", "**/*.tsx"],
})), {
    files: ["**/*.ts", "**/*.tsx"],

    rules: {
        "@typescript-eslint/no-explicit-any": "off",
    },
}, ...compat.extends("plugin:@nrwl/nx/javascript").map(config => ({
    ...config,
    files: ["**/*.js", "**/*.jsx"],
})), {
    files: ["**/*.js", "**/*.jsx"],
    rules: {},
}, {
    files: ["**/*.spec.ts", "**/*.spec.tsx", "**/*.spec.js", "**/*.spec.jsx"],

    languageOptions: {
        globals: {
            ...globals.jest,
        },
    },

    rules: {},
}];