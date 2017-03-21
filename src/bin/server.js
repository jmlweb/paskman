/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import {
  createIsomorphicWebpack,
} from 'isomorphic-webpack';
import {
  renderToString,
} from 'react-dom/server';
import Helmet from 'react-helmet';
import webpackConfiguration from '../webpack.configuration';

const compiler = webpack(webpackConfiguration);

const app = express();

app.use(webpackDevMiddleware(compiler, {
  noInfo: false,
  publicPath: '/static',
  quiet: false,
  stats: {
    assets: false,
    chunkModules: false,
    chunks: false,
    colors: true,
    hash: false,
    timings: false,
    version: false,
  },
}));

const {
  createCompilationPromise,
  evalBundleCode,
} = createIsomorphicWebpack(webpackConfiguration, {
  useCompilationPromise: true,
  nodeExternalsWhitelist: [
    /^react-router/,
    /^history/,
    /^express/,
    /^immutable/,
    /^moment/,
    /^webpack/,
    /^classnames/,
    /^express/,
    /^react-dom/,
    /^react-helmet/,
    /^react-progressbar\.js/,
    /^reselect/,
    /^shortid/,
  ],
});

app.use(async (req, res, next) => {
  await createCompilationPromise();

  next();
});

const renderFullPage = (head, body) =>
  `<!doctype html>
  <html ${head.htmlAttributes.toString()}>
    <head>${head.title.toString()}${head.meta.toString()}${head.style.toString()}</head>
    <body>
      <div style="opacity: 0; transition: opacity: 0.7s;" id='app'>${body}</div>
      <script src='/static/app.js'></script>
      <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
      <script>
       WebFont && WebFont.load({
          google: {
            families: ['Dosis:400,500,700']
          }
        });
      </script>
    </body>
  </html>`;

app.get('/*', (req, res) => {
  const requestUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  const appRender = renderToString(evalBundleCode(requestUrl).default);
  const head = Helmet.rewind();
  res.send(renderFullPage(head, appRender));
});

// app.get('/*', (req, res) => {
//   const requestUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
//   evalCode(requestUrl);
//   const appRender = renderToString(frontApp.default);
//   const head = Helmet.rewind();
//   res.send(renderFullPage(head, appRender));
// });

// app.get('/*', (req, res) => {
//   evalBundleCode(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
//   const appBody = renderToString(require('../app').default);
//   const head = Helmet.rewind();
//   res.send(renderFullPage(head, appBody));
// });

app.listen(9000);
