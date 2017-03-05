import React from 'react';
import { Circle } from 'react-progressbar.js';

const {
  number,
} = React.PropTypes;

const options = {
  color: '#333333',
  strokeWidth: 6,
  trailColor: '#eeeeee',
};

const getContainerStyle = (size = 260) => ({
  width: `${size}px`,
  height: `${size}px`,
});

const Progress = props => (
  <Circle
    progress={props.progress}
    options={options}
    containerStyle={getContainerStyle()}
  />
);

Progress.defaultProps = {
  progress: 0,
};

Progress.propTypes = {
  progress: number,
};

export default Progress;
