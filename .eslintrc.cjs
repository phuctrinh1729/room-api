// module.exports = {
// 	env: { es2020: true, node: true },
// 	extends: ["eslint:recommended"],
// 	parser: "@babel/eslint-parser",
// 	parserOptions: {
// 		ecmaVersion: "latest",
// 		sourceType: "module",
// 		requireConfigFile: false,
// 		allowImportExportEverywhere: true,
// 	},
// 	plugins: [],
// 	rules: {
// 		// Common
// 		"no-console": 1,
// 		"no-extra-boolean-cast": 0,
// 		"no-lonely-if": 1,
// 		"no-unused-vars": 1,
// 		"no-trailing-spaces": 1,
// 		"no-multi-spaces": 1,
// 		"no-multiple-empty-lines": 1,
// 		"space-before-blocks": ["error", "always"],
// 		"object-curly-spacing": [1, "always"],
// 		indent: ["warn", 2],
// 		semi: [1, "never"],
// 		quotes: ["error", "single"],
// 		"array-bracket-spacing": 1,
// 		"linebreak-style": 0,
// 		"no-unexpected-multiline": "warn",
// 		"keyword-spacing": 1,
// 		"comma-dangle": 1,
// 		"comma-spacing": 1,
// 		"arrow-spacing": 1,
// 	},
// };

// {
//   "env": {
//     "browser": true,
//     "es6": true,
//     "es2021": true
//   },
//   "globals": {
//     "Atomics": "readonly",
//     "SharedArrayBuffer": "readonly"
//   },
//   "parser": "@typescript-eslint/parser",
//   "parserOptions": {
//     "ecmaFeatures": {
//       "jsx": true
//     },
//     "ecmaVersion": 2018,
//     "sourceType": "module"
//   },
//   "plugins": ["react", "@typescript-eslint", "prettier", "jsx-a11y", "import"],
//   "extends": ["airbnb", "react-app", "plugin:react/recommended", "prettier"],
//   "rules": {
//     "consistent-return": "off",
//     "react/jsx-filename-extension": [
//       1,
//       {
//         "extensions": [".js", ".jsx", ".ts", ".tsx"]
//       }
//     ],
//     "prettier/prettier": [
//       "error",
//       {
//         "endOfLine": "auto"
//       }
//     ],
//     "no-alert": "off",
//     "@typescript-eslint/explicit-function-return-type": "off",
//     "react/function-component-definition": "off",
//     "react/require-default-props": "off",
//     "import/extensions": [
//       "error",
//       "ignorePackages",
//       {
//         "js": "never",
//         "jsx": "never",
//         "ts": "never",
//         "tsx": "never"
//       }
//     ],
//     "@typescript-eslint/no-unused-vars": [
//       "warn",
//       {
//         "vars": "all",
//         "args": "none"
//       }
//     ],
//     "max-len": [
//       "warn",
//       {
//         "code": 120,
//         "ignoreStrings": true,
//         "ignoreTemplateLiterals": true,
//         "ignoreComments": true
//       }
//     ],
//     "no-plusplus": [
//       "error",
//       {
//         "allowForLoopAfterthoughts": true
//       }
//     ],

//     // config
//     "no-shadow": "off",
//     "no-restricted-globals": "off",
//     "jsx-no-constructed-context-values": "off",
//     "no-unsafe-optional-chaining": "off",
//     "react/no-unstable-nested-components": "off",
//     "react/no-unused-prop-types": "off",
//     "react/jsx-no-useless-fragment": "off",
//     "default-param-last": "off",
//     "react/jsx-no-constructed-context-values": "off",
//     "react/no-array-index-key": "off",
//     "react/jsx-no-bind": "off",
//     "react/jsx-pascal-case": "off",

//     "react-native/no-inline-styles": "off",
//     "react/jsx-key": "error",
//     "import/no-extraneous-dependencies": "off",
//     "react/jsx-props-no-spreading": "off",
//     "import/prefer-default-export": "off",
//     "import/no-unresolved": "off",
//     "react/jsx-boolean-value": "off",
//     "react/prop-types": "off",
//     "react/no-unescaped-entities": "off",
//     "react/jsx-one-expression-per-line": "off",
//     "react/jsx-wrap-multilines": "off",
//     "react/destructuring-assignment": "off",
//     "react/jsx-curly-brace-presence": "off",
//     "react/prefer-stateless-function": "off",
//     "jsx-a11y/anchor-is-valid": "off",
//     "jsx-a11y/no-static-element-interactions": "off",
//     "jsx-a11y/label-has-for": [
//       2,
//       {
//         "required": {
//           "some": ["nesting", "id"]
//         },
//         "controlComponents": ["FormikInput"]
//       }
//     ],
//     "jsx-a11y/label-has-associated-control": [
//       2,
//       {
//         "controlComponents": ["FormikInput"],
//         "depth": 3
//       }
//     ],
//     "camelcase": "off",
//     "import/name": "off",
//     "no-underscore-dangle": "off"
//   },
//   "settings": {
//     "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
//     "import/parsers": {
//       "@typescript-eslint/parser": [".ts", ".tsx"]
//     },
//     "import/resolver": {
//       "node": {
//         "extensions": [".js", ".jsx", ".ts", ".tsx"],
//         "paths": ["src"]
//       }
//     }
//   }
// }
