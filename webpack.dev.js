const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const path = require("path");

module.exports = merge(commonConfig, {
  mode: "development",

  // ✅ Recommended for dev performance
  devtool: "eval-source-map",

  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"), // ✅ serve static assets from /public
    },
    historyApiFallback: true, // ✅ for React Router SPA
    open: true,
    hot: true, // ✅ enables HMR
    compress: true,
    port: 3000,
    client: {
      overlay: {
        errors: true,
        warnings: false, // ✅ disables blur overlay on warnings
      },
      progress: true, // optional, shows progress in browser console
    },
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // ✅ still fine, though ReactRefresh adds it internally
    new ReactRefreshWebpackPlugin({
      overlay: false, // optional: disable react-refresh overlay to avoid double blur
    }),
    new Dotenv(),
    // comment out if you don’t want bundle analyzer opening every time:
    // new BundleAnalyzerPlugin(),
  ],
});
