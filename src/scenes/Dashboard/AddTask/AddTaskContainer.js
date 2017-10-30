import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { modalToggle } from '../../../components/Modal/duck';
import {
  addTaskNameChangeAction,
  addTaskNameBlurAction,
  addTaskDescriptionChangeAction,
} from './duck';
import AddTaskWithModal from './AddTask';

class AddTaskContainer extends Component {
  static propTypes = {
    name: PT.shape({
      hasChanged: PT.bool,
      value: PT.string,
      isValid: PT.bool,
    }).isRequired,
    description: PT.string.isRequired,
    addTaskNameChangeAction: PT.func.isRequired,
    addTaskNameBlurAction: PT.func.isRequired,
    addTaskDescriptionChangeAction: PT.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameBlur = this.handleNameBlur.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }
  componentWillUnmount() {
    console.log('will unmount');
    this.props.addTaskNameBlurAction(false);
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleNameChange(e) {
    this.props.addTaskNameChangeAction(e.target.value);
  }
  handleNameBlur() {
    this.props.addTaskNameBlurAction(true);
  }
  handleDescriptionChange(e) {
    this.props.addTaskDescriptionChangeAction(e.target.value);
  }
  render() {
    return (
      <AddTaskWithModal
        name={this.props.name}
        description={this.props.description}
        handleNameChange={this.handleNameChange}
        handleNameBlur={this.handleNameBlur}
        handleDescriptionChange={this.handleDescriptionChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export function mapStateToProps(state) {
  return {
    ...state.components.modal,
    ...state.scenes.dashboard.addTask,
  };
}

export const mapDispatchToProps = {
  modalToggle,
  addTaskNameChangeAction,
  addTaskNameBlurAction,
  addTaskDescriptionChangeAction,
};

const AddTaskConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTaskContainer);

export default AddTaskConnectedContainer;
