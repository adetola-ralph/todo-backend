module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "one-var": 0,
        "one-var-declaration-per-line": 0,
        "new-cap": 0,
        "consistent-return": 0,
        "no-param-reassign": 0,
        "comma-dangle": 0,
        "curly": ["error", "multi-line"],
        "no-shadow": ["error", { "allow": ["req", "res", "err"] }],
        "valid-jsdoc": ["error", {
          "requireReturn": true,
          "requireReturnType": true,
          "requireParamDescription": false,
          "requireReturnDescription": true
        }],
        "require-jsdoc": ["error", {
            "require": {
                "FunctionDeclaration": true,
                "MethodDefinition": true,
                "ClassDeclaration": true
            }
        }]
    },
    "env": {
        "node": true,
        "mocha": true
    }
};