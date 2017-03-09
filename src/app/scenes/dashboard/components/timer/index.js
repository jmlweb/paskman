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

const Timer = ({ progress, amount, state, enabled }) => (
  <div className={style.timer}>
    <div className={style.info}>
      <Progress type="circle" progress={progress} />
      <div className={style.text}>
        <div className={style.clock}><Clock amount={amount} /></div>
        <div className={style.state}>{state}</div>
      </div>
    </div>
    <div className={style.btn}>
      <Btn color="primary">{`${getBtnText(enabled)} Timer`}</Btn>
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
