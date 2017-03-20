import React from 'react';
import CircleProgress from './circleprogress';
import LinearProgress from './linearprogress';

const {
  number,
  string,
} = React.PropTypes;

const Progress = ({ type, progress }) => {
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
