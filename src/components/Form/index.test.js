import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { default as Form } from './Form';
import { default as FieldSet } from './FieldSet/FieldSet';
import { default as FormGroup } from './FormGroup/FormGroup';
import { default as Label } from './Label/Label';
import { default as TextField } from './TextField/TextField';
import { default as OptionsSwitcher } from './OptionsSwitcher/OptionsSwitcher';
import { default as RangeSlider } from './RangeSlider/RangeSlider';

configure({ adapter: new Adapter() });

describe('Button', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Form>
        <FieldSet>
          <FormGroup>
            <Label>Dummy</Label>
            <TextField />
            <OptionsSwitcher
              options={[{description: 'dummy', value: 1}]}
              value={1}
              onChange={jest.fn()}
            />
            <RangeSlider
              tooltip={false}
              min={1}
              max={10}
              step={1}
              value={5}
              onChange={jest.fn()}
            />
          </FormGroup>
        </FieldSet>
      </Form>
    );
  });
  it('Render the component', () => {
    expect(wrapper.find(Form).length).toEqual(1);
  });
  it('Matchs snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
