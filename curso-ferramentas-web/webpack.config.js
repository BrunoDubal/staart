const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const babelLoader = {
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"],
      targets: {
        browsers: ["last 2 versions", "not ie 11"],
      },
    },
  },
};

module.exports = {
  entry: "./js/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  devServer: {static: "./dist"},
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    })
  ],
  module: {
    rules: [babelLoader],
  },
};