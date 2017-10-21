import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import SettingsConfig from './SettingsConfig';

configure({ adapter: new Adapter() });

// Resizer.prototype.componentWillMount = onWillMount;

const baseProps = {
  isLoading: false,
  target: {
    working: 25,
    resting: 5,
  },
  pauseBetween: false,
  confirmEndingTask: false,
  settingsSave: jest.fn(),
};

describe('Settings Config', () => {
  it('Render the component without loading', () => {
    const wrapper = mount(<SettingsConfig {...baseProps} />);
    expect(wrapper.find('SettingsConfig').length).toEqual(1);
  });
  it('Render the component when loading', () => {
    const loadingProps = {...baseProps, isLoading: true};
    const wrapper = mount(<SettingsConfig {...loadingProps} />);
    expect(wrapper.find('Loading').length).toEqual(1);
  });
  it('Handles event', () => {
    const handleSubmit = jest.fn();
    const handlePauseBetweenChange = jest.fn();
    SettingsConfig.prototype.handleSubmit = handleSubmit;
    const wrapper = mount(<SettingsConfig {...baseProps} />);
    //wrapper.find('rangeslider').simulate('change');
    wrapper.find('input').first().simulate('change');
    wrapper.find('form').simulate('submit');
    setTimeout(() => {
      expect(handlePauseBetweenChange).toHaveBeenCalled();
      expect(handleSubmit).toHaveBeenCalled();
    }, 500);
  });
  /*it('Render the component with tag', () => {
    const wrapper = mount(<Heading level="2" color="primary" tag="p">Dummy</Heading>);
    expect(wrapper.find(Heading).length).toEqual(1);
  });
  it('Render the component with level lower than 1', () => {
    const wrapper = mount(<Heading level="0">Dummy</Heading>);
    expect(wrapper.find(Heading).length).toEqual(1);
  });
  it('Render the component with level heigher than 6', () => {
    const wrapper = mount(<Heading level="7">Dummy</Heading>);
    expect(wrapper.find(Heading).length).toEqual(1);
  });
  it('Matchs snapshot', () => {
    const wrapper = mount(<Heading>Dummy</Heading>);
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });*/
});
