import createCheckboxInput from '../../components/checkboxInput';

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
      handlePauseBetweenChange,
      update,
      ...rest
    } = props;

    const CheckboxInput = createCheckboxInput(React);

    return (
      <div {...rest}>
        <p>
          <label htmlFor="workingMode">Working cycle minutes</label>
          <input id="workingMode" type="number" value={workingMode} onChange={handleWorkingChange} />
        </p>
        <p>
          <label htmlFor="restingMode">Resting cycle minutes</label>
          <input id="restingMode" type="number" value={restingMode} onChange={handleRestingChange} />
        </p>
        <CheckboxInput
          label="Pause timer between pomodoros"
          id="pauseBetween"
          checked={pauseBetween}
          onChange={handlePauseBetweenChange}
        />
        <p>
          <button onClick={update}>Submit</button>
        </p>
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
    handlePauseBetweenChange: func,
    update: func,
  };

  return settingsForm;
};
