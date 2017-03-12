import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  tasksAdd,
} from '../../../../data/tasks/duck';
import AddTaskView from './view';

const { func } = PropTypes;

class AddTask extends Component {
  static propTypes = {
    tasksAdd: func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
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
  handleSubmit(e) {
    e.preventDefault();
    this.props.tasksAdd({
      name: this.state.name,
      description: this.state.description,
    });
  }
  render() {
    return (
      <AddTaskView
        name={this.state.name}
        description={this.state.description}
        handleNameChange={this.handleNameChange}
        handleDescriptionChange={this.handleDescriptionChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(null, {
  tasksAdd,
})(AddTask);
