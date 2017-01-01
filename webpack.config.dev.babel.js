/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import webpack from 'webpack';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import defaultConfig from './webpack.config.defaults.babel';

export default Object.assign({}, defaultConfig, {
  devtool: 'eval',
  plugins: [
    new webpack.NoErrorsPlugin(),
    new BrowserSyncPlugin({
      proxy: 'http://localhost:9000',
    }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: [
        path.join(__dirname, 'source'),
        path.join(__dirname, 'app-home.js'),
      ],
    }],
  },
});
