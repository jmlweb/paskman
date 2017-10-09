import React from 'react';
import { render } from 'react-snapshot';
import { configureStore, history } from './store';
import Root from './scenes/Root';
import registerServiceWorker from './registerServiceWorker';

const target = document.querySelector('#root');
const { store, persistor } = configureStore();

render(
  <Root store={store} persistor={persistor} history={history} />,
  target,
);

registerServiceWorker();
