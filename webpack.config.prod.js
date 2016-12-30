'use strict'; // eslint-disable-line strict

var path = require('path');
var webpack = require('webpack');
var defaultConfig = require('./webpack.config.defaults');

module.exports = Object.assign({}, defaultConfig, {
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'source')
    }]
  }
});
