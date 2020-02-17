module.exports = {
  "root": true,
  // So parent files don't get applied
  "extends": [
    "react-app",
    "eslint:recommended",
    "airbnb"
  ],
  "plugins": ["react-hooks"],
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  },
  "rules": {
    "global-require": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": ["error", { "extensions": [".js"] }],
    "react/jsx-handler-names": [
      "error",
      {
        // airbnb is disabling this rule
        "eventHandlerPrefix": "handle",
        "eventHandlerPropPrefix": "on"
      }
    ],
    "react/sort-prop-types": ["error", { "sortShapeProp":  true }],
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/role-supports-aria-props": 0,
    "import/prefer-default-export": 0,
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
      }
    ],
    "import/no-dynamic-require": 0,
    "arrow-parens": [
      2,
      "as-needed",
      {
        "requireForBlockBody": false
      }
    ],
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 0, "maxEOF": 1 }]
  },
  "parser": "babel-eslint",
  "env": {
    "browser": true
  },
  "overrides": [
    {
      "files": [
        "src/**/*.test.js"
      ],
      "env": {
        "jest": true
      },
      "plugins": [
        "jest"
      ],
      "rules": {
        "react/react-in-jsx-scope": 0,
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
      }
    }
  ]
};
