import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './modules';

const configureStore = initialState =>
  createStore(
    reducer,
    initialState,
    applyMiddleware(thunkMiddleware),
  );

export default configureStore;

