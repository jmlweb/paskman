import React from 'react';
import PropTypes from 'prop-types';
import CircleProgress from './circleprogress';
import LinearProgress from './linearprogress';

const {
  number,
  string,
} = PropTypes;

const Progress = ({ type, progress }) => {
  if (typeof window.SVGElement !== 'function') {
    return false;
  }
  if (type === 'linear') {
    return <LinearProgress progress={progress} />;
  }
  return <CircleProgress progress={progress} />;
};

Progress.defaultProps = {
  progress: 0,
  type: 'circle',
};

Progress.propTypes = {
  progress: number,
  type: string,
};

export default Progress;
