import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import reducer from './reducer';

/* eslint-disable no-underscore-dangle */
const configureStore = () =>
  createStore(
    reducer,
    undefined,
    compose(
      autoRehydrate({
        log: true,
      }),
      applyMiddleware(thunkMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
  /* eslint-enable */

export default configureStore;

