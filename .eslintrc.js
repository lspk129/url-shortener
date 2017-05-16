module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "meteor": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        }
    },
    "settings": {
      "import/core-modules": [
        "meteor/meteor",
        "meteor/mongo",
        "meteor/check",
        "meteor/react-meteor-data"
      ]
    },
    "rules": {
      "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }]
    }
};
