import React from 'react';
import Preloader from './';
import renderer from 'react-test-renderer';

it('Preloader renders correctly', () => {
  const tree = renderer.create(
    <Preloader />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
