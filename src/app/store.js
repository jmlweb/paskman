import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

const configureStore = initialState =>
  createStore(
    reducer,
    initialState,
    applyMiddleware(thunkMiddleware),
  );

export default configureStore;

