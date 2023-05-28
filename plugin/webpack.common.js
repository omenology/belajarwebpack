const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    clean:  true
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSixe: 3 * 1024,
          },
        },
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins:[
    new HtmlWebpackPlugin()
  ]
};
