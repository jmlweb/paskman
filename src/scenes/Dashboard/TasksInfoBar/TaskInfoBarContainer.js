import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { modalOpen } from '../../../components/Modal/duck';
import constants from '../constants';

export function mapStateToProps() {
  return {};
}

export const mapDispatchToProps = {
  modalOpen,
};

const TaskInfoBarConnectedContainer = (WrappedComponent) => {
  class TaskInfoBarContainer extends Component {
    static propTypes = {
      modalOpen: PT.func.isRequired,
    }
    constructor(props) {
      super(props);
      this.handleAddTask = this.handleAddTask.bind(this);
    }
    handleAddTask() {
      this.props.modalOpen(constants.addTaskModalName);
    }
    render() {
      return <WrappedComponent handleAddTask={this.handleAddTask} />;
    }
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TaskInfoBarContainer);
};

export default TaskInfoBarConnectedContainer;
