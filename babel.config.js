// module.exports = {
//   presets: ["@babel/preset-env", "@babel/preset-react"]
// };
// babel.config.js
module.exports = {
  presets: [["@babel/preset-env", { targets: "> 0.25%, not dead, IE 11" }]],
  plugins:
    process.env.NODE_ENV === "development" ? ["react-refresh/babel"] : [],
};
//
