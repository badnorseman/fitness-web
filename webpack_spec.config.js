var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    "./spec/sum_spec",
    "./spec/fetch_products_spec"
  ],
  output: {
    path: path.join(__dirname, "spec"),
    filename: "spec.js",
    publicPath: "/spec/"
  },
  resolve: {
    extensions: ["", ".js"]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel",
      exclude: /node_modules/,
      include: path.join(__dirname, "/spec")
    }]
  }
};
