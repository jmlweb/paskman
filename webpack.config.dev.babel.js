/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import webpack from 'webpack';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import defaultConfig from './webpack.config.defaults.babel';

const jsDevInclude = [
  path.join(__dirname, 'source'),
  path.join(__dirname, 'app-home.js'),
];

const newModule = { ...defaultConfig.module };
newModule.loaders[1].include = jsDevInclude;

export default { ...defaultConfig,
  devtool: 'eval',
  plugins: [
    new webpack.NoErrorsPlugin(),
    new BrowserSyncPlugin({
      proxy: 'http://localhost:9000',
    }),
  ],
  module: newModule,
};
