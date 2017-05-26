module.exports = {
  "extends": "airbnb",
  "installedESLint": true,
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
  "parser": "babel-eslint",
  "rules": {
    "experimentalDecorators":"off",
    "react/jsx-boolean-value":"off",
    "react/prefer-es6-class": "off",
    "react/no-multi-comp": "off",
    "react/prop-types": "off",
    "react/no-string-refs": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-no-bind": ["error", {"allowArrowFunctions": false, "ignoreRefs": false, "allowBind": false}],
    "object-curly-spacing": ["error", "never"],
    "import/prefer-default-export": "off",
    "import/no-named-as-default": "off",
    "no-param-reassign": "off",
    "no-alert": "off",
    "no-console": "error",
    "no-underscore-dangle": "off",
    "jsx-a11y/label-has-for": "off",
    "no-tabs": "error",
    "generator-star-spacing": "off",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.test.js", "**/*.spec.js"]}]
  },
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  }
};
