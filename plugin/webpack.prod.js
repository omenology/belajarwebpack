const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const commonConfig = require("./webpack.common");

const prodConfig = {
  entry: "./src/index.js",
  output: {
    filename: "main.[contenthash].js",
  },
  mode: "production",
  //   optimization: {
  //     minimize: true,
  //     minimizer: [new TerserPlugin()],
  //   },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: "main.[contenthash].css",
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
