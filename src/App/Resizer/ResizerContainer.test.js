import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Resizer from './ResizerContainer';
import stateMock from '../../stateMock';

describe('Resizer', () => {
  const mockStore = configureStore();
  let wrapper;
  let store;
  let count = 0;
  const appSetDimensions = jest.fn();
  const onWillMount = jest.fn();
  beforeEach(() => {
    store = mockStore(stateMock);
    Resizer.prototype.componentWillMount = onWillMount;
    wrapper = mount(
      <Resizer key={count} appSetDimensions={appSetDimensions} store={store} />
    );
    count += 1;
  });
  it('Render the component', () => {
    expect(wrapper).toBeDefined();
  });
  it('Calls to onWillMount', () => {
    setTimeout(() => {
      expect(onWillMount).toHaveBeenCalled();
    }, 500);
  });
  it('Calls to appSetDimensions', () => {
    setTimeout(() => {
      expect(appSetDimensions).toHaveBeenCalled();
    }, 500);
  });
  it('Matchs snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
