import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import isEqual from 'lodash.isequal';
import { modalClose } from '../../../components/Modal/duck';
import {
  addTaskNameChange,
  addTaskNameBlur,
  addTaskDescriptionChange,
  addTaskToggleTimeMode,
  addTaskTimeChange,
  addTaskSave,
  addTaskReset,
  timeToPomodorosSelector,
} from './duck';
import AddTaskWithModal from './AddTask';
import constants from '../constants';

class AddTaskContainer extends Component {
  static propTypes = {
    name: PT.shape({
      hasChanged: PT.bool,
      value: PT.string,
      isValid: PT.bool,
    }).isRequired,
    description: PT.string.isRequired,
    timeRequired: PT.number.isRequired,
    timeToPomodoros: PT.number.isRequired,
    timeMode: PT.bool.isRequired,
    targetTime: PT.number.isRequired,
    isSaving: PT.bool.isRequired,
    addTaskNameChange: PT.func.isRequired,
    addTaskNameBlur: PT.func.isRequired,
    addTaskDescriptionChange: PT.func.isRequired,
    addTaskToggleTimeMode: PT.func.isRequired,
    addTaskTimeChange: PT.func.isRequired,
    addTaskSave: PT.func.isRequired,
    addTaskReset: PT.func.isRequired,
    modalClose: PT.func.isRequired,
  }
  componentDidMount() {
    window.addEventListener('beforeunload', this.componentCleanUp);
  }
  shouldComponentUpdate(newProps) {
    if (!isEqual(newProps.name, this.props.name)) {
      return true;
    }
    if (newProps.description !== this.props.description) {
      return true;
    }
    if (newProps.timeRequired !== this.props.timeRequired) {
      return true;
    }
    if (newProps.timeMode !== this.props.timeMode) {
      return true;
    }
    if (newProps.targetTime !== this.props.targetTime) {
      return true;
    }
    if (newProps.isSaving !== this.props.targetTime) {
      return true;
    }
    return false;
  }
  componentWillUnmount() {
    this.componentCleanUp();
    window.removeEventListener('beforeunload', this.componentCleanup);
  }
  componentCleanUp = () => {
    this.props.addTaskNameBlur(false);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      description,
      timeRequired,
    } = this.props;
    this.props.addTaskSave({
      name: name.value,
      description,
      timeRequired,
      callback: modalClose(constants.addTaskModalName),
    });
  }
  handleNameChange = (e) => {
    this.props.addTaskNameChange(e.target.value);
  }
  handleNameBlur = () => {
    this.props.addTaskNameBlur(true);
  }
  handleDescriptionChange = (e) => {
    this.props.addTaskDescriptionChange(e.target.value);
  }
  handlePomodorosChange = (e) => {
    this.props.addTaskTimeChange(e.target.value);
  }
  handleTimeChange = (e) => {
    this.props.addTaskTimeChange(e);
  }
  render() {
    return (
      <AddTaskWithModal
        name={this.props.name}
        description={this.props.description}
        timeRequired={this.props.timeRequired}
        timeToPomodoros={this.props.timeToPomodoros}
        timeMode={this.props.timeMode}
        targetTime={this.props.targetTime}
        isSaving={this.props.isSaving}
        modalName={constants.addTaskModalName}
        handleNameChange={this.handleNameChange}
        handleNameBlur={this.handleNameBlur}
        handleDescriptionChange={this.handleDescriptionChange}
        handleToggleTimeMode={this.props.addTaskToggleTimeMode}
        handlePomodorosChange={this.handlePomodorosChange}
        handleTimeChange={this.handleTimeChange}
        handleSubmit={this.handleSubmit}
        handleReset={this.props.addTaskReset}
      />
    );
  }
}

export function mapStateToProps(state) {
  return {
    ...state.components.modal,
    ...state.scenes.dashboard.addTask,
    targetTime: state.data.settings.target.working,
    timeToPomodoros: timeToPomodorosSelector(state),
  };
}

export const mapDispatchToProps = {
  modalClose,
  addTaskNameChange,
  addTaskNameBlur,
  addTaskDescriptionChange,
  addTaskTimeChange,
  addTaskToggleTimeMode,
  addTaskSave,
  addTaskReset,
};

const AddTaskConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTaskContainer);

export default AddTaskConnectedContainer;
