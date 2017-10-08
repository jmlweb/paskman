// @flow
import React, {
  Component,
} from 'react';
import { Provider, connect } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { persistStore } from 'redux-persist';
import localForage from 'localforage';
import App from '../App';

type Props = {
  store: {},
  history: {},
};

type State = {
  rehydrated: boolean,
};

class Root extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { rehydrated: false };
  }
  componentWillMount() {
    const { store } = this.props;
    persistStore(store, {
      blacklist: ['routing'],
      storage: localForage,
    }, () => {
      this.setState({
        rehydrated: true,
      });
    });
  }
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default connect(() => ({}), {
})(Root);
