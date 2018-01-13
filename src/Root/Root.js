import React from 'react';
import PT from 'prop-types';
import { Provider, connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from '../App/AppContainer';
import Loading from '../components/Loading/Loading';
import isSnapshot from '../utils/isSnapshot';

const onlyBrowserGate = (persistor, WrappedComponent) => {
  if (isSnapshot() || !persistor) {
    return WrappedComponent;
  }
  return (
    <PersistGate persistor={persistor} loading={<Loading />}>
      {WrappedComponent}
    </PersistGate>
  );
};

const Root = (props) => {
  const { store, history, persistor } = props;
  return (
    <Provider store={store}>
      {onlyBrowserGate(
        persistor,
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>,
      )}
    </Provider>
  );
};

Root.propTypes = {
  store: PT.objectOf(PT.any).isRequired,
  history: PT.objectOf(PT.any).isRequired,
  persistor: PT.objectOf(PT.any).isRequired,
};

export default Root;
