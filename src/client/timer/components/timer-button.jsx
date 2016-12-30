import React, { PropTypes } from 'react';
import Button from '../../button';

function getLabel(isActive, isToggling) {
  if (isToggling) {
    return 'Toggling...';
  }
  return `${isActive ? 'Pause' : 'Start'} timer`;
}

function TimerButton(props) {
  return (
    <Button
      action={props.toggleAction}
      actionLabel={getLabel(props.isActive, props.isToggling)}
    />
  );
}

export default TimerButton;

TimerButton.propTypes = {
  isActive: PropTypes.bool,
  isToggling: PropTypes.bool,
  toggleAction: PropTypes.func,
};
