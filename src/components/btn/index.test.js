import React from 'react';
import Btn from './';
import renderer from 'react-test-renderer';

it('Btn renders correctly', () => {
  const tree = renderer.create(
    <Btn color="primary">Test</Btn>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
