import React, { PureComponent } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { settingsFetch } from '../data/settings/duck';
import routes from '../routes';
import App from './App';

class AppContainer extends PureComponent {
  static propTypes = {
    settingsFetch: PT.func.isRequired,
  }
  componentDidMount() {
    this.props.settingsFetch();
  }
  render() {
    return <App routes={routes} />;
  }
}

export const mapStateToProps = state => ({
  location: state.routing.location,
  settings: state.data.settings,
});

export const mapDispatchToProps = {
  settingsFetch,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);
