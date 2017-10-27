import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import {
  settingsFetch,
  settingsSave,
  settingsChange,
} from '../../data/settings/duck';
import SettingsConfig from './SettingsConfig';

class SettingsConfigContainer extends Component {
  componentDidMount() {
    this.props.settingsFetch();
  }
  render() {
    const { isLoading, target, pauseBetween, confirmEndingTask, settingsSave } = this.props;
    const newProps = {
      isLoading,
      target,
      pauseBetween,
      confirmEndingTask,
      settingsSave,
    };
    return <SettingsConfig {...newProps} />;
  }
}

SettingsConfigContainer.defaultProps = {
  isLoading: false,
  pauseBetween: false,
  confirmEndingTask: false,
};

SettingsConfigContainer.propTypes = {
  isLoading: PT.bool,
  target: PT.number.isRequired,
  pauseBetween: PT.bool,
  confirmEndingTask: PT.bool,
  settingsFetch: PT.func.isRequired,
  settingsSave: PT.func.isRequired,
};

export function mapStateToProps(state) {
  return { ...state.data.settings };
};

export const mapDispatchToProps = {
  settingsFetch,
  settingsSave,
  settingsChange,
};

const SettingsConfigConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsConfigContainer);

export default SettingsConfigConnectedContainer;
