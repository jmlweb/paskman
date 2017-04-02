import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';
import reducer from './reducer';

const configureStore = initialState =>
  createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware),
      autoRehydrate({
        log: true,
      }),
    ),
  );

export default configureStore;

