const { merge } = require("webpack-merge");
const path = require("path");

const commonConfig = require("./webpack.common");

const devConfig = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
  },
  mode: "development",
  devServer: {
    port: 3000,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};

module.exports = merge(commonConfig, devConfig);
