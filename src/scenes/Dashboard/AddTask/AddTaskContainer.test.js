import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import AddTaskContainer from './AddTaskContainer';
import stateMock from '../../../stateMock';

describe('AddTaskContainer', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  let wrapper;
  let store;
  const modalToggle = jest.fn();
  beforeEach(() => {
    store = mockStore(stateMock);
    wrapper = mount(
      <Provider store={store}>
        <AddTaskContainer modalToggle={modalToggle} />
      </Provider>
    );
  });
  it('Render the component', () => {
    expect(wrapper).toBeDefined();
  });
  it('Matchs snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
