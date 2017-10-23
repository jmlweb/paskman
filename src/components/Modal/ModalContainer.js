// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  modalClose,
} from './duck';
import Modal from './Modal';

type Props = {
  title: string,
  isOpen: bool,
  children: mixed,
  name: string,
  modal: {},
  modalClose: (name: string) => void,
  closeCallback: () => void,
};

class ModalContainer extends Component<Props> {
  handleClose: (e: Event) => void;
  constructor(props: Props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose(e: Event) {
    const { name, modalClose, closeCallback } = this.props;
    modalClose(name);
    if (closeCallback) {
      closeCallback();
    }
  }
  render() {
    const { name, modal, title, children } = this.props;
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

export function mapStateToProps(state: {
  components: {
    modal: mixed,
  }
}) {
  return { ...state.components };
};

export const mapDispatchToProps = {
  modalClose,
};

const ModalConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);

// const withModal = (WrappedComponent: Function, props: {
//   title: string,
//   name: string,
//   isOpen?: bool,
//   closeCallback?: () => void,
// }) => (
//   <ModalConnectedContainer {...props}>
//     <WrappedComponent />
//   </ModalConnectedContainer>
// );

export default ModalConnectedContainer;
