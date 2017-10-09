// @flow
import React from 'react';
import { Provider, connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from '../App';
import Loading from '../../components/Loading';

type Props = {
  store?: {},
  persistor: any,
  history?: {},
};

const Root = (props: Props) => {
  const { store, persistor, history } = props;
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  )
};

export default connect(() => ({}), {
})(Root);
