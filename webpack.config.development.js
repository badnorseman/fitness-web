var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "eval-source-map",
  entry: [
    "webpack-hot-middleware/client",
    "./src/scripts/App.js"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ["", ".js"]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel",
      exclude: /node_modules/,
      include: path.join(__dirname, "/src/scripts")
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.(jpg|png)$/,
      loader: "url-loader?limit=8192"
    }]
  }
};
