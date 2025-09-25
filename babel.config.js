module.exports = {
  presets: [
    [
      "@babel/preset-env",
      // {
      //   "useBuiltIns": "usage",
      //   "corejs": "3.26",
      // },
    ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
  plugins:
    process.env.NODE_ENV === "development" ? ["react-refresh/babel"] : [],
};
//
