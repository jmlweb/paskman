import React from 'react';
import PropTypes from 'prop-types';
import Btn from '../../../../components/btn';
import Clock from '../../../../components/clock';
import Progress from '../progress';
import style from './style.scss';

const {
  number,
  string,
  func,
} = PropTypes;

const getBtnText = (state) => {
  if (state === 'started') {
    return 'Pause';
  }
  if (state === 'paused') {
    return 'Continue';
  }
  return 'Start';
};

const TimerView = ({ progress, amount, mode, state, handleClick, handleStop }) => (
  <div className={style.timer}>
    <div className={style.info}>
      <Progress type="circle" progress={progress} />
      <div className={style.text}>
        <div className={style.mode}>{mode}</div>
        <div className={style.clock}><Clock amount={amount} /></div>
        <div className={style.state}>{state}</div>
      </div>
    </div>
    <div className={style.btn}>
      <Btn color="primary" onClick={handleClick}>{getBtnText(state)}</Btn>
      {state === 'paused' && <Btn color="primary" onClick={handleStop}>Stop</Btn>}
    </div>
  </div>
);

TimerView.defaultProps = {
  amount: 0,
  progress: 0,
  state: 'stopped',
  mode: 'working',
  handleClick: () => null,
  handleStop: () => null,
};

TimerView.propTypes = {
  amount: number,
  progress: number,
  state: string,
  mode: string,
  handleClick: func.isRequired,
  handleStop: func.isRequired,
};

export default TimerView;
