import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux-immutable';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import timerReducer from './reducers/timer-reducer';
import TimerClock from './containers/timer-clock';
import TimerButton from './containers/timer-button';

const store = createStore(combineReducers({
  timer: timerReducer,
}));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <TimerClock />
      <TimerButton />
    </div>
  </Provider>,
  document.querySelector('.app'),
);
