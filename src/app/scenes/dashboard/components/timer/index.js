import React from 'react';
import Btn from '../../../../components/btn';
import Clock from '../../../../components/clock';
import Progress from '../progress';
import style from './style.scss';

const {
  number,
  bool,
  string,
} = React.PropTypes;

const getBtnText = (enabled) => {
  if (enabled) {
    return 'Pause';
  }
  return 'Start';
};

const Timer = props => (
  <div className={style.timer}>
    <div className={style.info}>
      <Progress progress={props.progress} />
      <div className={style.text}>
        <div className={style.info}><Clock amount={props.amount} /></div>
        <div className={style.info}>{props.state}</div>
      </div>
    </div>
    <div className="btn">
      <Btn>{`${getBtnText(props.enabled)} Timer`}</Btn>
    </div>
  </div>
);

Timer.defaultProps = {
  amount: 0,
  enabled: false,
  progress: 0,
  state: 'Stopped',
};

Timer.propTypes = {
  amount: number,
  enabled: bool,
  progress: number,
  state: string,
};

export default Timer;
