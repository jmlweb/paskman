import React from 'react';
import PropTypes from 'prop-types';
import { Circle } from '../shape';

const {
  number,
} = PropTypes;

const options = {
  color: '#ffa3a2',
  strokeWidth: 6,
  trailColor: '#ebedf7',
};

const getContainerStyle = size => ({
  width: `${size}px`,
  height: `${size}px`,
});

const CircleProgressView = ({ progress, size }) => {
  if (window.SVGElement) {
    return (
      <Circle
        progress={progress}
        options={options}
        containerStyle={getContainerStyle(size)}
      />
    );
  }
  return null;
};

CircleProgressView.defaultProps = {
  size: 200,
};

CircleProgressView.propTypes = {
  progress: number.isRequired,
  size: number,
};

export default CircleProgressView;
