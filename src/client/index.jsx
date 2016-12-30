import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import Root from './root/containers/root';
import rootReducer from './root/reducer';

const store = createStore(rootReducer);

render(
  <Root store={store} />,
  document.querySelector('.app'),
);
