const path = require("path");
const glob = require("glob");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
//
const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");
//
const PATHS = {
  src: path.join(__dirname, "src"),
};

module.exports = merge(commonConfig, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
    new Dotenv(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public/.htaccess"),
          to: path.resolve(__dirname, "build/.htaccess"),
        },
      ],
    }),
    new CompressionPlugin(),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            ["imagemin-mozjpeg", { quality: 75 }],
            ["imagemin-optipng", { optimizationLevel: 5 }],
          ],
        },
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    usedExports: true,
  },
});
