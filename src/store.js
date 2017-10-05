import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import reducer from './reducer';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const configureStore = () =>
  createStore(
    reducer,
    undefined,
    composeEnhancers(
      autoRehydrate({
        log: true,
      }),
      applyMiddleware(thunkMiddleware),
    ),
  );

export default configureStore;

