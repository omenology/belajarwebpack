const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const commonConfig = require("./webpack.common");

const prodConfig = {
  output: {
    filename: "[name].[contenthash].js",
  },
  mode: "production",
  optimization: {
    // minimize: true,
    // minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: "all",
    },
  },
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
      filename: "[name].[contenthash].css",
    }),
    new ModuleFederationPlugin({
      name: "HelloWorldApp",
      filename: "remoteEntry.js",
      exposes: {
        "./HelloWordlButton": "./src/components/hello-world-button/hello-world-button.js",
        "./HelloWorldPage": "./src/components/hello-world-page/hello-world-pageg.js"
      },
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
