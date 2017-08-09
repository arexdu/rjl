module.export = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "es7": true,
        "es8": true,
        "none": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [ "react" ],
    "rules": {
        "indent": ["error", 2],
        "linebreak-style": ["error","unix"],
        "quotes": ["error","single"],
        "semi": ["error","always"],
        "no-console": ["warn", { "allow": ["info", "error"] }]
    }
};