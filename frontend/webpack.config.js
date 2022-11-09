const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  name: "VWX",
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
  devServer: {
    devMiddleware: { publicPath: "/dist" },
    static: { directory: path.join(__dirname, "public") },
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
};
