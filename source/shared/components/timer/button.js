import createButton from '../button';

function getLabel(isActive, isToggling) {
  if (isToggling) {
    return 'Toggling...';
  }
  return `${isActive ? 'Pause' : 'Start'} timer`;
}

export default (React) => {
  const {
    bool,
    func,
  } = React.PropTypes;
  const Button = createButton(React);
  const timerButton = ({ toggleAction, isActive, isToggling }) =>
    <Button action={toggleAction} actionLabel={getLabel(isActive, isToggling)} icon="timer" />;
  timerButton.propTypes = {
    isActive: bool,
    isToggling: bool,
    toggleAction: func,
  };
  return timerButton;
};
