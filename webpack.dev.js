const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
//
//
module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    static: "./build",
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  devtool: "inline-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new Dotenv(),
  ],
});
