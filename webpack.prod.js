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
const safeParser = require("postcss-safe-parser");
const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common");

const PATHS = {
  src: path.join(__dirname, "src"),
};

module.exports = merge(commonConfig, {
  mode: "production",

  plugins: [
    // Extract CSS
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].[contenthash].css",
    }),

    // Purge unused CSS
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*.{js,jsx,ts,tsx,html}`, {
        nodir: true,
      }),

      // Ensure it only scans templates, not CSS
      only: [() => "main"],

      safelist: {
        standard: [/^swiper-/, /^slick-/, /^fa-/, /^mdi-/], // keep 3rd-party libs
        deep: [/^chakra-/, /^ant-/], // nested class patterns if using UI libs
      },
    }),

    // Load env variables
    new Dotenv(),

    // Copy only required static assets
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public/.htaccess"),
          to: path.resolve(__dirname, "build/.htaccess"),
        },
      ],
    }),

    // Pre-compression (gzip + brotli)
    new CompressionPlugin({
      algorithm: "brotliCompress",
      filename: "[path][base].br",
      test: /\.(js|css|html|svg|woff2?)$/,
      compressionOptions: { level: 11 },
      deleteOriginalAssets: false,
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [
      // Minify CSS
      new CssMinimizerPlugin(),

      // Minify JS
      new TerserPlugin(),

      // Optimize Images
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["mozjpeg", { quality: 60 }],
              ["pngquant", { quality: [0.4, 0.5] }],
              ["svgo", { plugins: [{ removeViewBox: false }] }],
            ],
          },
        },
      }),
    ],

    // Enable tree-shaking + module pruning
    usedExports: true,

    // Split vendor & runtime bundles
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: "single",
  },

  performance: {
    hints: "warning",
    maxEntrypointSize: 512000, // 500 KB
    maxAssetSize: 512000,
  },
});
