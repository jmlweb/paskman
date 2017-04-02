/* eslint-disable filenames/match-regex */
/* eslint-disable import/no-extraneous-dependencies */
const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const path = require('path');

const nodeEnv = process.env.NODE_ENV;

const basePlugins = [
  new HtmlWebpackPlugin({
    template: 'index.hbs',
    production: true,
    inject: true,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor.bundle.[hash].js'
  }),
];

const vendorModules = [
  'react',
  'react-dom',
  'redux',
  'redux-actions',
  'react-redux',
  'react-router',
  'react-router-redux',
  'react-helmet',
];

const baseConfig = {
  output: {
    filename: 'bundle.[chunkhash].js',
    // the output bundle

    path: resolve(__dirname, 'dist'),

    publicPath: '/',
    // necessary for HMR to know where to load the hot update chunks
  },

  context: resolve(__dirname, 'src'),

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      /*{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
        ],
      },*/
      {
        test: /\.svg$/,
        use: [
          'raw-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeTitle: true },
              ],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
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
              includePaths: [path.resolve(__dirname, './src/assets/styles')],
            },
          },
        ],
      },
    ],
  },
};

if (nodeEnv === 'production') {
  module.exports = Object.assign(baseConfig, {
    entry: {
          vendor: vendorModules,
          js: [
            './index.js',
            './scenes/main/index.js',
          ]
        },
    plugins: basePlugins.concat([
      new LodashModuleReplacementPlugin({
        caching: true,
        collections: true,
        paths: true,
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
        sourceMap: true,
      }),
    ]),
    performance: {
      hints: 'warning',
    },
  });
} else {
  module.exports = Object.assign(baseConfig, {
    entry: {
      vendor: vendorModules.concat([
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:9000',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
      ]),
      js: [
        './index.hot.js',
        './scenes/main/index.js',
      ]
    },
    /*entry: [
      'react-hot-loader/patch',
      // activate HMR for React

      'webpack-dev-server/client?http://localhost:9000',
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint

      'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates

      './index.hot.js',
      // the entry point of our app
    ],*/
    devtool: 'inline-source-map',
    devServer: {
      hot: true,
      // enable HMR on the server

      contentBase: resolve(__dirname, 'dist'),
      // match the output path

      publicPath: '/',
      // match the output `publicPath`
      compress: true,
      port: 9000,
      historyApiFallback: true,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // enable HMR globally

      new webpack.NamedModulesPlugin(),
      // prints more readable module names in the browser console on HMR
    ].concat(basePlugins),
  });
}
