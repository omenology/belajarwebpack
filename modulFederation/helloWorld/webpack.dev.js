const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const commonConfig = require("./webpack.common");

const devConfig = {
  output: {
    filename: "[name].js",
    publicPath: "http://localhost:3000/",
  },
  mode: "development",
  devServer: {
    port: 3000,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
  },
  optimization: {
    splitChunks: false,
  },
  module: {
    rules: [],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "HelloWorldApp",
      filename: "remoteEntry.js",
      exposes: {
        "./HelloWordlButton": "./src/components/hello-world-button/hello-world-button.js",
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
