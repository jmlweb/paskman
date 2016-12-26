import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import timerReducer from './reducers/timer-reducer';
import Root from './containers/root';


const store = createStore(combineReducers({
  timer: timerReducer,
}));

render(
  <Root store={store} />,
  document.querySelector('.app'),
);
