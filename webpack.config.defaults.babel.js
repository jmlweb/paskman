import path from 'path';

export default {
  resolve: {
    root: path.join(__dirname, 'source'),
  },
  entry: [
    './source/client/index',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'index.js',
    publicPath: './public/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'source'),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
        include: path.join(__dirname, 'source'),
      },
    ],
  },
};
