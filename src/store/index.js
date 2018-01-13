import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import localForage from 'localforage';
import composedEnhancers from './composedEnhancers';
import rootReducer from './rootReducer';

const initialState = {};
const persistLog = process.env.NODE_ENV === 'development';

const persistConfig = {
  key: 'root',
  storage: localForage,
  blacklist: ['routing', '_persist'],
  debug: persistLog,
};

export default () => {
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
