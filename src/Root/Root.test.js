import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { persistStore } from 'redux-persist';
import Root from './Root';
import stateMock from '../stateMock';

describe('Root', () => {
  const mockStore = configureStore();
  let store;
  let history;
  let wrapper;
  let persistor;
  beforeEach(() => {
    store = mockStore(stateMock);
    history = createHistory();
    persistor = persistStore(store);
    wrapper = mount(
      <Root store={store} history={history} persistor={persistor} />
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
