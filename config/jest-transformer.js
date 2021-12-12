const config = {
  babelrc: false,
  preset: "react-native-web",
  presets: [
    [
      "@babel/env",
      {
        modules: false,
      },
    ],
    "@babel/react",
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-transform-modules-commonjs"],
  ],
};
module.exports = require("babel-jest").createTransformer(config);
