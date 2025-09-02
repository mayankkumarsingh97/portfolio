const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const path = require("path");
//
//
module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    static: "./build",
    port: 3000,
    // hot: true,
    // historyApiFallback: true,
    // open: true,
    // liveReload: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new Dotenv(),
  ],
});


