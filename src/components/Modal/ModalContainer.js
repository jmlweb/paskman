import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import {
  modalClose,
} from './duck';
import Modal from './Modal';

class ModalContainer extends Component {
  static defaultProps = {
    modal: {},
    title: null,
    closeCallback: null,
  }
  static propTypes = {
    name: PT.string.isRequired,
    modal: PT.objectOf(PT.bool),
    title: PT.string,
    children: PT.oneOfType([PT.element, PT.array]).isRequired,
    modalClose: PT.func.isRequired,
    closeCallback: PT.func,
  }
  handleClose = () => {
    const { name, closeCallback } = this.props;
    this.props.modalClose(name);
    if (closeCallback) {
      closeCallback();
    }
  }
  render() {
    const {
      name,
      modal,
      title,
      children,
    } = this.props;
    return (
      <Modal
        title={title}
        isOpen={modal[name]}
        handleClose={this.handleClose}
      >
        {children}
      </Modal>
    );
  }
}

export function mapStateToProps(state) {
  return { ...state.components };
};

export const mapDispatchToProps = {
  modalClose,
};

const ModalConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalContainer);

export default ModalConnectedContainer;
