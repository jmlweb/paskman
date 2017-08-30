import React from 'react';
import PropTypes from 'prop-types';
import Progress from '../progress';
import Clock from '../../../../components/clock';
import style from './style.scss';

const {
  number,
  string,
} = PropTypes;

function getName(name) {
  if (!name) {
    return 'Unplanned task';
  }
  return name;
}

const FeaturedTaskView = ({ name, elapsedTime, totalTime, progress }) => (
  <div className={style.featuredTask}>
    <h1 className={style.title}>{getName(name)}</h1>
    <div className={style.time}>
      <Clock amount={elapsedTime} /> / <Clock amount={totalTime} />
    </div>
    <Progress type="linear" progress={progress} />
  </div>
);

FeaturedTaskView.defaultProps = {
  name: null,
  progress: 0,
  elapsedTime: 0,
  totalTime: 0,
};

FeaturedTaskView.propTypes = {
  name: string,
  progress: number,
  elapsedTime: number,
  totalTime: number,
};

export default FeaturedTaskView;
