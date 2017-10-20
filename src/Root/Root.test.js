import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import Root from './Root';
import stateMock from '../stateMock';

configure({ adapter: new Adapter() });

describe('Root', () => {
  const mockStore = configureStore();
  let store;
  let history;
  let wrapper;
  beforeEach(() => {
    store = mockStore(stateMock);
    history = createHistory();
    wrapper = mount(
      <Root store={store} history={history} />
    );
  });
  it('Render the connected component', () => {
    expect(wrapper.find(Root).length).toEqual(1);
  });
  it('Matchs snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
