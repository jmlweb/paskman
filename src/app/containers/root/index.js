import React, {
  Component,
} from 'react';
import {
  Provider,
  connect,
} from 'react-redux';
import { Router } from 'react-router';
import createRoutes from '../../routes';

const {
  objectOf,
  any,
} = React.PropTypes;

class Root extends Component {

  componentWillMount() {
    this.routes = createRoutes();
  }

  render() {
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

Root.defaultProps = {
  store: {},
  history: {},
};

Root.propTypes = {
  store: objectOf(any),
  history: objectOf(any),
};