import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  settingsFetch,
  settingsSave,
  settingsChange,
} from '../../data/settings/duck';
import SettingsConfig, { type Props as ComponentProps } from './SettingsConfig';

class SettingsConfigContainer extends Component {
  componentDidMount() {
    const { settingsFetch } = this.props;
    settingsFetch();
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
  mapDispatchToProps
)(SettingsConfigContainer);

export default SettingsConfigConnectedContainer;
