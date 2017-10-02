/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ConnectedModal from './';
import * as duck from './duck';

const modalName = 'dummy';

describe('Modal', () => {
  const initialState = {
    components: {
      modal: duck.initialState,
    },
  };
  const mockStore = configureStore();
  let store;
  let wrapper;
  const connectedModal = (
    <ConnectedModal name={modalName} title="What a dummy test">
      <p>Some dummy content</p>
    </ConnectedModal>
  );
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        {connectedModal}
      </Provider>
    );
  });
  it('Render the connected component', () => {
    expect(wrapper.find(ConnectedModal).length).toEqual(1);
  });
  it('Should call the modal toggle action', () => {
    let action;
    store.dispatch(duck.modalToggle(modalName));
    action = store.getActions();
    expect(action[0].type).toBe(duck.MODAL_TOGGLE);
  });
  it('Should open the modal', () => {
    const modalView = wrapper.find('ModalView');
    modalView.prop('toggleModal')();
    setTimeout(() => {
      expect(modalView.prop('modalOpen')).toBe(true);
    }, 50);
  });
  it('Should close the modal', () => {
    const modalView = wrapper.find('ModalView');
    wrapper.setProps({isOpen: true});
    modalView.prop('toggleModal')();
    setTimeout(() => {
      expect(modalView.prop('modalOpen')).toBe(false);
    }, 50);
  });
});