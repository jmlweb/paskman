import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import {
  Provider,
  connect,
} from 'react-redux';
import { Router } from 'react-router';
import { persistStore } from 'redux-persist';
import { asyncLocalStorage } from 'redux-persist/storages';
import immutableTransform from 'redux-persist-transform-immutable';
import routes from './routes';
import Preloader from './components/preloader';

const {
  objectOf,
  any,
} = PropTypes;

class Root extends Component {
  static propTypes = {
    store: objectOf(any),
    history: objectOf(any),
  };
  static defaultProps = {
    store: {},
    history: {},
  };
  constructor(props) {
    super(props);
    this.state = { rehydrated: false };
  }
  componentWillMount() {
    const { store } = this.props;
    persistStore(store, {
      transforms: [immutableTransform()],
      blacklist: ['routing'],
      storage: asyncLocalStorage,
    }, () => {
      this.setState({
        rehydrated: true,
      });
    });
    this.routes = routes;
  }
  render() {
    if (!this.state.rehydrated) {
      return <Preloader />;
    }
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history} routes={this.routes} />
      </Provider>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(() => (mapStateToProps), {
})(Root);
