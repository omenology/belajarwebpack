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
    ],
  },
  plugins: [
    new TerserPlugin(),
    new ModuleFederationPlugin({
      name: "dashboard",
      remotes: {
        HelloWorldApp: "HelloWorldApp@http://localhost:3000/remoteEntry.js",
        KiwiApp: "KiwiApp@http://localhost:3001/remoteEntry.js"
      }
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
