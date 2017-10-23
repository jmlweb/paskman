// @flow
import React from 'react'
import Modal from '../../../components/Modal/ModalContainer';
import constants from '../constants';

const AddTask = () => {
  return <div>Hola</div>;
}

const AddTaskWithModal = ({ name }: { name: string }) => (
  <Modal name={constants.addTaskModalName} title="Add new task">
    <AddTask />
  </Modal>
);

export default AddTaskWithModal;
