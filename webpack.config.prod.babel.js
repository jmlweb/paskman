/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
import defaultConfig from './webpack.config.defaults.babel';

export default Object.assign({}, defaultConfig, {
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ],
});
