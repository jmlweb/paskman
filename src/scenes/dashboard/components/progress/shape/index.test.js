import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
  Shape,
  ProgressBarLib as ProgressBar,
  Line,
  Circle,
} from '.';

function setup() {
  const props = {
    ShapeClass: ProgressBar.Line,
    options: {},
    progress: 0,
    text: null,
    initialAnimate: false,
    containerStyle: {},
    containerClassName: 'progressbar-container',
  };

  const props2 = {...props, ShapeClass: ProgressBar.Circle};

  const props3 = {
    progress: 60,
  };

  const enzymeWrapper = shallow(<Shape {...props} />);
  const enzymeWrapper2 = shallow(<Shape {...props2} />);
  const enzymeWrapper3 = shallow(<Line {...props3} />);
  const enzymeWrapper4 = shallow(<Circle {...props3} />);

  return {
    props,
    enzymeWrapper,
    enzymeWrapper2,
    enzymeWrapper3,
    enzymeWrapper4,
  };
}

describe('Line', () => {
  it('should render Line Shape', () => {
    const { enzymeWrapper } = setup();
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });
  it('should render Line Component', () => {
    const { enzymeWrapper3 } = setup();
    expect(toJson(enzymeWrapper3)).toMatchSnapshot();
  });
});

describe('Circle', () => {
  it('should render Circle Shape', () => {
    const { enzymeWrapper2 } = setup();
    expect(toJson(enzymeWrapper2)).toMatchSnapshot();
  });
  it('should render Circle Component', () => {
    const { enzymeWrapper4 } = setup();
    expect(toJson(enzymeWrapper4)).toMatchSnapshot();
  });
});
