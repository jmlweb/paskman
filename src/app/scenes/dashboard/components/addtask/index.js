import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  tasksAdd,
} from '../../../../data/tasks/duck';
import {
  dashboardToggleTasksModal,
} from '../../duck';
import AddTaskView from './view';

const { func, bool } = PropTypes;

class AddTask extends Component {
  static propTypes = {
    tasksAdd: func.isRequired,
    dashboardToggleTasksModal: func.isRequired,
    tasksModalOpen: bool,
  }
  static defaultProps = {
    tasksModalOpen: false,
  }
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
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
  toggleModal() {
    this.props.dashboardToggleTasksModal();
  }
  render() {
    const { tasksModalOpen } = this.props;
    return (
      <AddTaskView
        tasksModalOpen={tasksModalOpen}
        name={this.state.name}
        description={this.state.description}
        handleNameChange={this.handleNameChange}
        handleDescriptionChange={this.handleDescriptionChange}
        handleSubmit={this.handleSubmit}
        toggleModal={this.toggleModal}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    tasksModalOpen: state.scenes.dashboard.get('tasksModalOpen'),
  };
}

export default connect(mapStateToProps, {
  tasksAdd,
  dashboardToggleTasksModal,
})(AddTask);
