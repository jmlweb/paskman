import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SettingsConfig from './SettingsConfigContainer';
import stateMock from '../../stateMock';

configure({ adapter: new Adapter() });

describe('SettingsConfig', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let wrapper;
  let store;
  let count = 0;
  const settingsFetch = jest.fn();
  const settingsSave = jest.fn();
  const settingsChange = jest.fn();
  const onWillMount = jest.fn();
  beforeEach(() => {
    store = mockStore(stateMock);
    SettingsConfig.prototype.componentWillMount = onWillMount;
    wrapper = mount(
      <SettingsConfig
        key={count}
        settingsFetch={settingsFetch}
        settingsSave={settingsSave}
        settingsChange={settingsChange}
        store={store}
      />
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
  it('Calls to settingsFetch', () => {
    setTimeout(() => {
      expect(settingsFetch).toHaveBeenCalled();
    }, 500);
  });
  it('Matchs snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
