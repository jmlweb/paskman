import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Resizer from './ResizerContainer';

configure({ adapter: new Adapter() });

describe('Resizer', () => {
  let wrapper;
  let count = 0;
  const appSetDimensions = jest.fn();
  const onWillMount = jest.fn();
  beforeEach(() => {
    Resizer.prototype.componentWillMount = onWillMount;
    wrapper = mount(
      <Resizer key={count} appSetDimensions={appSetDimensions} />
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
