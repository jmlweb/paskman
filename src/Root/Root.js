// @flow
import React from 'react';
import { Provider, connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from '../App/App';
import Loading from '../components/Loading/Loading';
import isSnapshot from '../utils/isSnapshot';

type Props = {
  store?: {},
  history?: {},
  persistor: any,
};

const onlyBrowserGate = (persistor, WrappedComponent) => {
  if (isSnapshot()) {
    return WrappedComponent;
  }
  return (
    <PersistGate
      persistor={persistor}
      loading={<Loading />}
    >
      {WrappedComponent}
    </PersistGate>
  );
}

const Root = (props: Props) => {
  const { store, history, persistor } = props;
  return (
    <Provider store={store}>
      {onlyBrowserGate(persistor, (
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      ))}
    </Provider>
  )
};

export default connect(() => ({}), {
})(Root);
