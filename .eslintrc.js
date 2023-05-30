module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
        {
            "files": ["*.ts"],
            "rules": {
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-inferrable-types": "off",
                "prefer-const": 0,
                "no-unused-vars": "off"
            },
            "plugins": ["@typescript-eslint/recommended"],
            "extends": [
                "plugin:@nrwl/nx/angular",
                "plugin:@angular-eslint/template/process-inline-templates"
            ]
        },
        {
            "files": ["*.html"],
            "extends": ["plugin:@nrwl/nx/angular-template"],
            "rules": {}
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        'semi': [2, 'always'],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "prefer-const": "Off",
        "no-unused-vars": "off",
    },

}
