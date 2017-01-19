const webpack = require('webpack');
const path = require ('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, '/src/bundle/'),
    filename: 'app.js',
    publicPath: 'http://localhost:9090/src/bundle/',
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel'],
      exclude: /node_modules/,
    },
    ],
  },
  plugins: [
   new webpack.DefinePlugin({
     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
   }),
   new webpack.NoErrorsPlugin(),
 ]
};