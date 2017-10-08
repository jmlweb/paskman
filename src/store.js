// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducer';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history),
];
let persistLog: boolean = false;

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
  persistLog = true;
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  autoRehydrate({
    log: persistLog,
  }),
  ...enhancers,
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

export default store;
