import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  tasksAdd,
} from '../../../../data/tasks/duck';
import {
  modalToggle,
} from '../../../../components/modal/duck';
import AddTaskView from './view';

const { func } = PropTypes;

class AddTask extends Component {
  static propTypes = {
    tasksAdd: func.isRequired,
    modalToggle: func.isRequired,
  };
  static defaultState = {
    name: '',
    description: '',
    timeRequired: 25,
  };
  constructor(props) {
    super(props);
    this.state = AddTask.defaultState;
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleTimeRequiredChange = this.handleTimeRequiredChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }
  handleDescriptionChange(e) {
    this.setState({
      description: e.target.value,
    });
  }
  handleTimeRequiredChange(e) {
    if (e.target) {
      this.setState({
        timeRequired: parseInt(e.target.value || 0, 10),
      });
    } else {
      this.setState({
        timeRequired: parseInt(e || 0, 10),
      });
    }
  }
  handleReset() {
    this.setState(AddTask.defaultState);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.tasksAdd({
      name: this.state.name,
      description: this.state.description,
      timeRequired: this.state.timeRequired * 60 * 1000,
    });
    this.setState(AddTask.defaultState);
    this.props.modalToggle('addTask');
  }
  render() {
    return (
      <AddTaskView
        name={this.state.name}
        description={this.state.description}
        timeRequired={this.state.timeRequired}
        handleNameChange={this.handleNameChange}
        handleDescriptionChange={this.handleDescriptionChange}
        handleTimeRequiredChange={this.handleTimeRequiredChange}
        handleReset={this.handleReset}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(null, {
  tasksAdd,
  modalToggle,
})(AddTask);
