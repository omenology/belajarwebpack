const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const commonConfig = require("./webpack.common");

const devConfig = {
  output: {
    filename: "[name].js",
    publicPath: "http://localhost:3002/",
  },
  mode: "development",
  devServer: {
    port: 3002,
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
      name: "dashboard",
      remotes: {
        HelloWorldApp: "HelloWorldApp@http://localhost:3000/remoteEntry.js",
        KiwiApp: "KiwiApp@http://localhost:3001/remoteEntry.js"
      }
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
