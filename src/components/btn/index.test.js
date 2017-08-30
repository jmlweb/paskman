import React from 'react';
import renderer from 'react-test-renderer';
import Btn from './';

it('Btn renders correctly', () => {
  const tree = renderer.create(
    <Btn color="primary">Test</Btn>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
