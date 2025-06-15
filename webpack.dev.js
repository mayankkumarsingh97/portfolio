const Dotenv = require("dotenv-webpack");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const path = require("path");
//
//
module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "./build"),
    },
    port: 3000,
    hot: true,
    open: true,
    liveReload: false,
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
  plugins: [new Dotenv()],
});
