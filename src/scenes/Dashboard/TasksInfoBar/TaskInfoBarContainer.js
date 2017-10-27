import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modalOpen } from '../../../components/Modal/duck';
import constants from '../constants';

const TaskInfoBarConnectedContainer = (WrappedComponent) => {
  class TaskInfoBarContainer extends Component {
    constructor(props) {
      super(props);
      this.handleAddTask = this.handleAddTask.bind(this);
    }
    handleAddTask() {
      const { modalOpen } = this.props;
      modalOpen(constants.addTaskModalName);
    }
    render() {
      return <WrappedComponent handleAddTask={this.handleAddTask} />
    }
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(TaskInfoBarContainer);
}

export function mapStateToProps() {
  return {};
};

export const mapDispatchToProps = {
  modalOpen,
};

export default TaskInfoBarConnectedContainer;
