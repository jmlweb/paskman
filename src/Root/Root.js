import React from 'react';
import PT from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import OnlyBrowserGate from './OnlyBrowserGate';
import App from '../App/AppContainer';

const Root = ({ store, history, persistor }) => (
  <Provider store={store}>
    {OnlyBrowserGate(
      persistor,
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>,
    )}
  </Provider>
);

Root.propTypes = {
  store: PT.objectOf(PT.any).isRequired,
  history: PT.objectOf(PT.any).isRequired,
  persistor: PT.objectOf(PT.any).isRequired,
};

export default Root;
