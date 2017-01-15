export default (React) => {
  const {
    number,
    objectOf,
    any,
    bool,
    func,
  } = React.PropTypes;

  const settingsForm = (props) => {
    const {
      workingMode,
      restingMode,
      pauseBetween,
      handleWorkingChange,
      handleRestingChange,
      setPauseBetween,
      ...rest
    } = props;

    return (
      <div {...rest}>
        <input value={workingMode} onChange={handleWorkingChange} />
        <input value={restingMode} onChange={handleRestingChange} />
        <p>{pauseBetween && 'Sí'}</p>
      </div>
    );
  };

  settingsForm.propTypes = {
    workingMode: number,
    restingMode: number,
    modes: objectOf(any),
    pauseBetween: bool,
    handleWorkingChange: func,
    handleRestingChange: func,
    setPauseBetween: func,
  };

  return settingsForm;
};
