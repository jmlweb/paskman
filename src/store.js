import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistReducer, persistStore } from 'redux-persist';
import localForage from 'localforage';
import createHistory from 'history/createBrowserHistory';
import { rootEpic, rootReducer } from './reducer';

export const history = createHistory();

const epicMiddleware = createEpicMiddleware(rootEpic);

const initialState = {};
const enhancers = [];
const middleware = [epicMiddleware, routerMiddleware(history)];
let persistLog = false;

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
  persistLog = true;
}

const persistConfig = {
  key: 'root',
  storage: localForage,
  blacklist: ['routing', '_persist'],
  debug: persistLog,
};

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export const configureStore = () => {
  const store = createStore(
    persistReducer(persistConfig, rootReducer),
    initialState,
    composedEnhancers,
  );
  return {
    store,
    persistor: persistStore(store),
  };
};
