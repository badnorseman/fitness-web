var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    "./spec/sumSpec",
    "./spec/fetchAllProductsSpec"
  ],
  output: {
    path: path.join(__dirname, "spec"),
    publicPath: "/spec/",
    filename: "spec.js"
  },
  resolve: {
    extensions: ["", ".js"]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, "/spec"),
      loader: "babel?stage=0"
    }]
  }
};
