// @flow
import React from 'react';
import { Provider, connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from '../App/App';

type Props = {
  store?: {},
  history?: {},
};

const Root = (props: Props) => {
  const { store, history } = props;
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
