/* eslint-disable filenames/match-regex */
/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

const getPlugins = () => {
  const nodeEnv = process.env.NODE_ENV;
  const pluginsArr = [];

  if (nodeEnv === 'development') {
    pluginsArr.push(new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8000',
    }));
  }
  return pluginsArr;
};

export default {
  context: __dirname,
  entry: {
    app: [
      path.resolve(__dirname, './app'),
    ],
  },
  module: {
    loaders: [
      {
        include: path.resolve(__dirname, './app'),
        loader: 'babel-loader',
        test: /\.js$/,
      },
      {
        loader: 'raw-loader',
        test: /\.svg$/,
      },
      {
        loaders: [
          {
            loader: 'style-loader',
            query: {
              sourceMap: 1,
            },
          },
          {
            loader: 'css-loader',
            query: {
              importLoaders: 1,
              localIdentName: '[path]___[name]___[local]',
              modules: 1,
            },
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, './app/assets/styles')],
            },
          },
        ],
        test: /\.scss$/,
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: getPlugins(),
};
