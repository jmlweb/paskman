'use strict'; // eslint-disable-line strict

var path = require('path');

module.exports = {
  resolve: {
    root: path.join(__dirname, 'source')
  },
  entry: [
    './source/client/index'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'index.js',
    publicPath: '/public/'
  },
};
