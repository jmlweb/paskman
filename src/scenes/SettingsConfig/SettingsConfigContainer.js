// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { settingsChange, settingsFetch } from '../../data/settings/duck';
import SettingsConfig, { type Props as ComponentProps } from './SettingsConfig';

type Props = {
  ...ComponentProps,
  settingsFetch: () => void,
};

class SettingsConfigContainer extends Component<Props> {
  componentDidMount() {
    const { settingsFetch }: Props = this.props;
    settingsFetch();
  }
  render() {
    const { isLoading, target, pauseBetween, confirmEndingTask } = this.props;
    const newProps = {
      isLoading,
      target,
      pauseBetween,
      confirmEndingTask,
    }
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

export function mapDispatchToProps() {
  return {
    settingsChange,
    settingsFetch,
  };
};

const SettingsConfigConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsConfigContainer);

export default SettingsConfigConnectedContainer;
