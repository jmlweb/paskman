import React from 'react';
import Progress from '../progress';
import Clock from '../../../../components/clock';
import style from './style.scss';

const {
  number,
  string,
} = React.PropTypes;

function getName(name) {
  if (!name) {
    return 'Unplanned task';
  }
  return name;
}

const FeaturedTask = ({ name, elapsedTime, totalTime, progress }) => (
  <div className={style.featuredTask}>
    <h1 className={style.title}>{getName(name)}</h1>
    <div className={style.time}>
      <Clock amount={elapsedTime} /> / <Clock amount={totalTime} />
    </div>
    <Progress type="linear" progress={progress} />
  </div>
);

FeaturedTask.defaultProps = {
  name: null,
  progress: 0.4,
  elapsedTime: 0,
  totalTime: 0,
};

FeaturedTask.propTypes = {
  name: string,
  progress: number,
  elapsedTime: number,
  totalTime: number,
};

export default FeaturedTask;
