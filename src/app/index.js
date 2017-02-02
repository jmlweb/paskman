import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './redux';
import Root from './containers/root';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const app = <Root store={store} history={history} />;

if (typeof ISOMORPHIC_WEBPACK === 'undefined') {
  const appWrapper = document.getElementById('app');
  appWrapper.style.opacity = 1;
  render(app, appWrapper);
}

export default app;
