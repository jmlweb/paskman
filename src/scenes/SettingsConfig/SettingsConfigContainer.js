import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import isEqual from 'lodash.isequal';
import {
  settingsSave,
  settingsChange,
} from '../../data/settings/duck';
import Loading from '../../components/Loading/Loading';
import SettingsConfig from './SettingsConfig';
import constants from './constants';

class SettingsConfigContainer extends Component {
  static defaultProps = {
    isSaving: false,
    target: {
      working: 25,
      resting: 5,
    },
    pauseBetween: false,
    confirmEndingTask: false,
  }
  static propTypes = {
    isSaving: PT.bool,
    target: PT.shape({
      working: PT.number,
      resting: PT.number,
    }),
    pauseBetween: PT.bool,
    confirmEndingTask: PT.bool,
    settingsSave: PT.func.isRequired,
  }
  state = {
    isSaving: this.props.isSaving,
    target: this.props.target,
    pauseBetween: this.props.pauseBetween,
    confirmEndingTask: this.props.confirmEndingTask,
  }
  // componentWillReceiveProps(nextProps) {
  //   const {
  //     target,
  //     pauseBetween,
  //     confirmEndingTask,
  //   } = nextProps;
  //   this.setState({
  //     target,
  //     pauseBetween,
  //     confirmEndingTask,
  //   });
  // }
  shouldComponentUpdate(newProps, newState) {
    return (
      !isEqual(newState, this.state)
      || newProps.isSaving !== this.props.isSaving
    );
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.settingsSave({
      ...this.state,
    });
  }
  handleTargetSlider = mode =>
    (value) => {
      this.setState({
        target: {
          ...this.state.target,
          [`${mode}`]: value,
        },
      });
    };
  handleConfirmEndingTaskChange = (e) => {
    this.setState({
      confirmEndingTask: e.target.value === 'true' && true,
    });
  }
  handlePauseBetweenChange = (e) => {
    this.setState({
      pauseBetween: e.target.value === 'true' && true,
    });
  }
  render() {
    return (
      <div>
        {this.props.isSaving && <Loading text="Saving data..." />}
        <SettingsConfig
          target={this.state.target}
          pauseBetween={this.state.pauseBetween}
          confirmEndingTask={this.state.confirmEndingTask}
          handleSubmit={this.handleSubmit}
          handleTargetSlider={this.handleTargetSlider}
          handleConfirmEndingTaskChange={this.handleConfirmEndingTaskChange}
          handlePauseBetweenChange={this.handlePauseBetweenChange}
          defaults={constants}
        />
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return { ...state.data.settings };
}

export const mapDispatchToProps = {
  settingsSave,
  settingsChange,
};

const SettingsConfigConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsConfigContainer);

export default SettingsConfigConnectedContainer;
