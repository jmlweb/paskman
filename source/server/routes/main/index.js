import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StyleSheetServer } from 'aphrodite';
import renderLayout from '../../render-layout';
// import render from '../../render';
import settings from '../../settings';

import configureStore from '../../../shared/redux';
import createRoutes from '../../../shared/routes';

const store = configureStore();
const routes = createRoutes(React);

export default (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const { html, css } = StyleSheetServer.renderStatic(
        () => renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>,
        ),
        // () => render(React)(renderProps, store),
      );
      const initialState = store.getState();
      res.status(200).send(renderLayout({ settings, html, css, initialState }));
    } else {
      res.status(404).send('Not found');
    }
  });
};
