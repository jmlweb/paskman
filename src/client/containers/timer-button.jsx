import React, { PropTypes } from 'react';
import Button from '../components/button';

function TimerButton(props) {
  return (
    <Button
      action={props.toggleAction}
      actionLabel={`${props.isActive ? 'Pause' : 'Start'} timer`}
    />
  );
}

export default TimerButton;

TimerButton.propTypes = {
  isActive: PropTypes.bool,
  toggleAction: PropTypes.func,
};
