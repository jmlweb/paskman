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
  if (process.env.NODE_ENV !== 'production') {
    const { whyDidYouUpdate } = require('why-did-you-update');
    whyDidYouUpdate(React)
  }
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
