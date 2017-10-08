import React from 'react';
import { render } from 'react-snapshot';
import store, { history } from './store';
import Root from './scenes/Root';
import registerServiceWorker from './registerServiceWorker';

const target = document.querySelector('#root');

render(
  <Root store={store} history={history} />,
  target,
);

registerServiceWorker();
