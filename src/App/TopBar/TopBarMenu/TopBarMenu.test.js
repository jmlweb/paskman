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
    path: '/dummy',
    title: 'Dummy',
    component: () => <div>Dummy</div>,
  },
];

describe('Menu', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <div>
          <TopBarMenu routes={routes} menuOpen={false} toggleMenu={jest.fn()} />
          <Router routes={routes} />
        </div>
      </BrowserRouter>
    );
  });
  it('Render the component', () => {
    expect(wrapper.find('Menu').length).toEqual(1);
  });
  it('Matchs snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
