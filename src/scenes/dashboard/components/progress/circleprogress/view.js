import React from 'react';
import { Circle } from 'react-progressbar.js';

const {
  number,
} = React.PropTypes;

const options = {
  color: '#ffa3a2',
  strokeWidth: 6,
  trailColor: '#ebedf7',
};

const getContainerStyle = size => ({
  width: `${size}px`,
  height: `${size}px`,
});

const CircleProgressView = ({ progress, size }) => (
  <Circle
    progress={progress}
    options={options}
    containerStyle={getContainerStyle(size)}
  />
);

CircleProgressView.defaultProps = {
  size: 200,
};

CircleProgressView.propTypes = {
  progress: number.isRequired,
  size: number,
};

export default CircleProgressView;
