import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store';
import Root from './root';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const app = <Root store={store} history={history} />;

const appWrapper = document.getElementById('app');
appWrapper.style.opacity = 1;
render(app, appWrapper);

export default app;
