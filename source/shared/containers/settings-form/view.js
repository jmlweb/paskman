export default (React) => {
  const {
    number,
    objectOf,
    any,
    bool,
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
    workingMode: number,
    restingMode: number,
    modes: objectOf(any),
    pauseBetween: bool,
  };

  return settingsForm;
};
