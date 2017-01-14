import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import * as Immutable from 'immutable';
import { StyleSheet } from 'aphrodite';
import reducers from '../shared/redux/modules';
import createRoutes from '../shared/routes';
import { pomodoroMockup } from '../shared/redux/modules/pomodoro';
import { settingsMockup } from '../shared/redux/modules/settings';

let state = null;
if (window.BOOTSTRAP_CLIENT_STATE) {
  state = window.BOOTSTRAP_CLIENT_STATE;
  state.pomodoro = Immutable.fromJS(Object.assign({}, pomodoroMockup, state.pomodoro));
  state.settings = Immutable.fromJS(Object.assign({}, settingsMockup, state.settings));
}

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer,
  }),
  // hydrating server.
  state,
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  /* eslint-enable */
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

const routes = createRoutes(React, history);

StyleSheet.rehydrate(window.BOOTSTRAP_CLASSNAMES);

// Required for replaying actions from devtools to work
// reduxRouterMiddleware.listenForReplays(store);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root'),
);
