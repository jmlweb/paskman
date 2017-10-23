// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modalToggle } from '../../../components/Modal/duck';
import AddTask from './AddTask';

class AddTaskContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <AddTask />;
  }
}

export function mapStateToProps(state: {
  components: {
    modal: mixed,
  }
}) {
  return { ...state.components.modal };
};

export const mapDispatchToProps = {
  modalToggle,
};

const AddTaskConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTaskContainer);

export default AddTaskConnectedContainer;
