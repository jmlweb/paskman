/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import { persistStore } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import configureStore from './store';
import Root from './root';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
persistStore(store, {
  transforms: [immutableTransform()],
  blacklist: ['routing'],
});

const app = <AppContainer><Root store={store} history={history} /></AppContainer>;

const appWrapper = document.getElementById('app');
appWrapper.style.opacity = 1;
render(app, appWrapper);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./root', () => {
    render(app, appWrapper);
  });
}

export default app;
