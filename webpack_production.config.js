var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  entry: [
    "./src/scripts/app.js"
  ],
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  resolve: {
    extensions: ["", ".js"]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, "/src/scripts"),
      loader: "babel?stage=0"
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.(jpg|png)$/,
      loader: "url-loader?limit=8192"
    }]
  }
};
