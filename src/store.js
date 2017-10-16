// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import localForage from 'localforage';
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

 /* istanbul ignore next */
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
  persistLog = true;
}

const persistConfig: {
  [name: string]: any,
} = {
  key: 'root',
  storage: localForage,
  blacklist: ['routing', '_persist'],
  debug: persistLog,
};

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

export const configureStore = () => {
  const store = createStore(
    persistReducer(persistConfig, rootReducer),
    initialState,
    composedEnhancers,
  );
  return store;
};
