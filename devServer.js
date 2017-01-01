/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import log from './source/server/log';
import settings from './source/server/settings';
import app from './source/server/app';
import config from './webpack.config.dev.babel';

const devServerConfig = Object.assign({}, config, {
  plugins: [
    new webpack.NoErrorsPlugin(),
  ],
});

const compiler = webpack(devServerConfig);
const NODE_PORT = process.env.NODE_PORT || settings.NODE_PORT;
const NODE_HOST = process.env.NODE_HOST || settings.NODE_HOST;

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

const serverURL = `http://${NODE_HOST}:${NODE_PORT}`;
const logAndOpen = () => {
  log.info(`Listening at ${serverURL}`);
};

app.listen(
  NODE_PORT,
  NODE_HOST,
  (err) => {
    if (err) {
      return console.error(err);
    }
    return logAndOpen();
  },
);
