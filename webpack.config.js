var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "eval-source-map",
  entry: [
    "webpack-dev-server/client?http://localhost:8080/",
    "webpack/hot/dev-server",
    "./src/scripts/App.js"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
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
