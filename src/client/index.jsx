import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import timerReducer from './timer/reducer';
import Root from './root/containers/root';


const store = createStore(combineReducers({
  timer: timerReducer,
}));

render(
  <Root store={store} />,
  document.querySelector('.app'),
);
