module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [
        {
            "files": [
                "**/*.ts",
                "**/*.tsx"
            ],
            "plugins": [
                "@typescript-eslint",
                "unused-imports",
                "simple-import-sort"
            ],
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            },
            "rules": {
                "prettier/prettier": [
                    "error",
                    {
                        "singleQuote": true,
                        "endOfLine": "auto"
                    }
                ],
                "import/extensions": [
                    "error",
                    "ignorePackages",
                    {
                        "js": "never",
                        "jsx": "never",
                        "ts": "never",
                        "tsx": "never",
                        "": "never"
                    }
                ],
                // Avoid missing file extension errors when using '@/' alias
                "@typescript-eslint/comma-dangle": "off",
                // Avoid conflict rule between Eslint and Prettier
                "@typescript-eslint/consistent-type-imports": "error",
                // Ensure `import type` is used when it's necessary
                "import/prefer-default-export": "off",
                // Named export is easier to refactor automatically
                "simple-import-sort/imports": "error",
                // Import configuration for `eslint-plugin-simple-import-sort`
                "simple-import-sort/exports": "error",
                // turn off class-methods-use-this
                "class-methods-use-this": "off",
                // Export configuration for `eslint-plugin-simple-import-sort`
                "@typescript-eslint/no-unused-vars": "off",
                "unused-imports/no-unused-imports": "error",
                "unused-imports/no-unused-vars": [
                    "error",
                    {
                        "argsIgnorePattern": "^_"
                    }
                ],
                "no-console": 0
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        "prettier/prettier": [
            "error",
            {
                "singleQuote": true,
                "endOfLine": "auto"
            }
        ],
    },
}
