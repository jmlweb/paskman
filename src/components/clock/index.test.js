import React from 'react';
import Clock from './';
import renderer from 'react-test-renderer';

it('Clock renders correctly', () => {
  const tree = renderer.create(
    <Clock amount={3600000} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
