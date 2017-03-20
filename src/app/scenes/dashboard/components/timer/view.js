import React from 'react';
import Btn from '../../../../components/btn';
import Clock from '../../../../components/clock';
import Progress from '../progress';
import style from './style.scss';

const {
  number,
  bool,
  string,
  func,
} = React.PropTypes;

const getBtnText = (enabled) => {
  if (enabled) {
    return 'Pause';
  }
  return 'Start';
};

const TimerView = ({ progress, amount, state, enabled, handleClick }) => (
  <div className={style.timer}>
    <div className={style.info}>
      <Progress type="circle" progress={progress} />
      <div className={style.text}>
        <div className={style.clock}><Clock amount={amount} /></div>
        <div className={style.state}>{state}</div>
      </div>
    </div>
    <div className={style.btn}>
      <Btn color="primary" onClick={handleClick}>{`${getBtnText(enabled)} Timer`}</Btn>
    </div>
  </div>
);

TimerView.defaultProps = {
  amount: 0,
  enabled: false,
  progress: 0,
  state: 'stopped',
};

TimerView.propTypes = {
  amount: number,
  enabled: bool,
  progress: number,
  state: string,
  handleClick: func.isRequired,
};

export default TimerView;
