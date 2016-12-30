'use strict'; // eslint-disable-line strict

var path = require('path');
var webpack = require('webpack');
var defaultConfig = require('./webpack.config.defaults');

module.exports = Object.assign({}, defaultConfig, {
  devtool: 'eval',
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: [
        path.join(__dirname, 'source'),
        path.join(__dirname, 'app-home.js')
      ]
    }]
  }
});
