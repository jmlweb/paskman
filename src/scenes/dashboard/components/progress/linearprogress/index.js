import React from 'react';
import PropTypes from 'prop-types';
import { Line } from '../shape';

const {
  number,
} = PropTypes;

const options = {
  color: '#ffa3a2',
  strokeWidth: 3,
  trailColor: '#eeeeee',
  trailWidth: 3,
};

const LinearProgress = ({ progress }) => (
  <Line
    progress={progress}
    options={options}
    containerStyle={{
      width: '90%',
      height: '8px',
      borderRadius: '15px',
      overflow: 'hidden',
    }}
  />
);

LinearProgress.propTypes = {
  progress: number.isRequired,
};

export default LinearProgress;
