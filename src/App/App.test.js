import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import App from './App';
import stateMock from '../stateMock';

describe('App', () => {
  const mockStore = configureStore();
  let store;
  let history;
  let wrapper;
  let count = 0;
  beforeEach(() => {
    store = mockStore(stateMock);
    history = createHistory();
    wrapper = mount(
      <Provider key={count} store={store}>
        <ConnectedRouter key={count} history={history}>
          <App key={count} />
        </ConnectedRouter>
      </Provider>
    );
    count += 1;
  });
  it('Render the connected component', () => {
    expect(wrapper.find(App).length).toEqual(1);
  });
  it('Matchs snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
