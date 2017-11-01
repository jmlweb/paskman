import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import isEqual from 'lodash.isequal';
import {
  settingsFetchAction,
  settingsSaveAction,
  settingsChangeAction,
} from '../../data/settings/duck';
import Loading from '../../components/Loading/Loading';
import SettingsConfig from './SettingsConfig';
import constants from './constants';

class SettingsConfigContainer extends Component {
  static defaultProps = {
    isFetching: false,
    isSaving: false,
    pauseBetween: false,
    confirmEndingTask: false,
  }
  static propTypes = {
    isFetching: PT.bool,
    isSaving: PT.bool,
    target: PT.shape({
      working: PT.number,
      resting: PT.number,
    }).isRequired,
    pauseBetween: PT.bool,
    confirmEndingTask: PT.bool,
    settingsFetch: PT.func.isRequired,
    settingsSave: PT.func.isRequired,
  }
  state = {
    isFetching: true,
  }
  componentDidMount() {
    const { settingsFetch } = this.props;
    settingsFetch();
  }
  componentWillReceiveProps(nextProps) {
    const {
      isFetching,
      target,
      pauseBetween,
      confirmEndingTask,
    } = nextProps;
    this.setState({
      isFetching,
      target,
      pauseBetween,
      confirmEndingTask,
    });
  }
  shouldComponentUpdate(newProps, newState) {
    return (
      !isEqual(newState, this.state)
      || newProps.isSaving !== this.props.isSaving
    );
  }
  handleSubmit = (e) => {
    const { settingsSave } = this.props;
    e.preventDefault();
    settingsSave({
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
    if (this.state.isFetching) {
      return <Loading text="Loading data..." />;
    }
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
  settingsFetch: settingsFetchAction,
  settingsSave: settingsSaveAction,
  settingsChange: settingsChangeAction,
};

const SettingsConfigConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsConfigContainer);

export default SettingsConfigConnectedContainer;
