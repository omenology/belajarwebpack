const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const commonConfig = require("./webpack.common");

const devConfig = {
  output: {
    filename: "[name].js",
    publicPath: "http://localhost:3001/",
  },
  mode: "development",
  devServer: {
    port: 3001,
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
      name: "KiwiApp",
      filename: "remoteEntry.js",
      remotes: {
        HelloWorldApp: "HelloWorldApp@http://localhost:3000/remoteEntry.js",
      },
      exposes: {
        "./KiwiPage": "./src/components/kiwi-page/kiwi-page.js",
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
