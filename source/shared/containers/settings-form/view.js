export default (React) => {
  const {
    objectOf,
    bool,
    func,
    any,
  } = React.PropTypes;

  const settingsForm = (props) => {
    const { workingMode, restingMode, pauseBetween, ...rest } = props;

    return (
      <div {...rest}>
        <p>{workingMode}</p>
        <p>{restingMode}</p>
        <p>{pauseBetween && 'Sí'}</p>
      </div>
    );
  };

  settingsForm.propTypes = {
    modes: objectOf(any),
    pauseBetween: bool,
  };

  return settingsForm;
};
