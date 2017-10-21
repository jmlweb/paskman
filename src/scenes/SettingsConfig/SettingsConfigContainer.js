// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  settingsFetch,
  settingsSave,
  settingsChange,
} from '../../data/settings/duck';
import SettingsConfig, { type Props as ComponentProps } from './SettingsConfig';

type Props = {
  ...ComponentProps,
  settingsFetch: () => void,
};

class SettingsConfigContainer extends Component<Props> {
  componentWillMount() {
    const { settingsFetch }: Props = this.props;
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

export function mapStateToProps(state: {
  data: {
    settings: ComponentProps,
  }
}) {
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
