import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import TopBarMenu from './TopBarMenu';
import Router from '../../Router/Router';
import createDynamicComponent from '../../../components/DynamicComponent/DynamicComponent';

const routes = [
  {
    path: '/',
    title: 'Home',
    component: createDynamicComponent(
      () => import('../../../scenes/Dashboard/Dashboard'),
      () => require('../../../scenes/Dashboard/Dashboard'),
    ),
  },
];

describe('Menu', () => {
  let wrapper;
  let count = 0;
  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter key={`b${count}`}>
        <div key={`d${count}`}>
          <TopBarMenu key={`m${count}`} routes={routes} />
          <Router key={`r${count}`} routes={routes} />
        </div>
      </BrowserRouter>
    );
    count += 1;
  });
  it('Render the component', () => {
    expect(wrapper.find('Menu').length).toEqual(1);
  });
  it('Matchs snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
