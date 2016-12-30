'use strict'; // eslint-disable-line strict

var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var defaultConfig = require('./webpack.config.defaults');

module.exports = Object.assign({}, defaultConfig, {
  devtool: 'eval',
  plugins: [
    new webpack.NoErrorsPlugin(),
    new BrowserSyncPlugin({
      proxy: 'http://localhost:3000',
    }),
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
  },
});
