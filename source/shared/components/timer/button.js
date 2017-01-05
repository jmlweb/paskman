import { PropTypes } from 'react';
import createButton from '../button';

function getLabel(isActive, isToggling) {
  if (isToggling) {
    return 'Toggling...';
  }
  return `${isActive ? 'Pause' : 'Start'} timer`;
}

function getButton(React, { toggleAction, isActive, isToggling }) {
  const Button = createButton(React);
  return (
    <Button
      action={toggleAction}
      actionLabel={getLabel(isActive, isToggling)}
      icon="timer"
    />
  );
}

export default React => props => Object.assign(
  {},
  getButton(React, {
    toggleAction: props.toggleAction,
    isActive: props.isActive,
    isToggling: props.isToggling,
  }),
  {
    propTypes: {
      isActive: PropTypes.bool,
      isToggling: PropTypes.bool,
      toggleAction: PropTypes.func,
    },
  },
);
