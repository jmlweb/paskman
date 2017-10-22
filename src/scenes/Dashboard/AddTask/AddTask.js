// @flow
import React from 'react'
import Modal from '../../../components/Modal/ModalContainer';

const AddTask = () => {
  return <div>Hola</div>;
}

const AddTaskWithModal = ({ name }: { name: string }) => (
  <Modal name={name} title="Add new task">
    <AddTask />
  </Modal>
);

export default AddTaskWithModal;
