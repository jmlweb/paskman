import { css, withStyles } from '../../with-styles';
import createFields from '../../components/fields';
import createField from '../../components/field';

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
      styles,
      workingMode,
      restingMode,
      pauseBetween,
      handleWorkingChange,
      handleRestingChange,
      handlePauseBetweenChange,
      update,
      ...rest
    } = props;
    delete rest.theme;

    const Fields = createFields(React);
    const Field = createField(React);

    const labelStyle = {
      width: '150px',
    };

    const inputStyle = {
      width: '40px',
      textAlign: 'center',
      marginRight: '20px',
    };

    return (
      <div {...css(styles.wrapper)}>
        <div {...rest}>
          <h3 {...css(styles.title)}>Choose your settings...</h3>
          <Fields horizontal>
            <Field
              type="number"
              label="Working cycle minutes"
              id="workingMode"
              style={inputStyle}
              labelStyle={labelStyle}
              inline
              value={workingMode}
              onChange={handleWorkingChange}
            />
            <Field
              type="number"
              label="Resting cycle minutes"
              id="restingMode"
              style={inputStyle}
              labelStyle={labelStyle}
              inline
              value={restingMode}
              onChange={handleRestingChange}
            />
            <Field
              type="checkbox"
              label="Pause timer between pomodoros"
              id="pauseBetween"
              labelStyle={({
                marginRight: '20px',
              })}
              checked={pauseBetween}
              onChange={handlePauseBetweenChange}
            />
            <Field
              type="button"
              actionLabel="Submit"
              id="submit"
              onClick={update}
            />
          </Fields>
        </div>
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
    styles: objectOf(any),
  };

  return withStyles(({ color, font, spacing }) => ({
    title: {
      color: color.heath,
      fontSize: '20px',
      textAlign: 'center',
      fontWeight: font.medium,
      padding: `${spacing.md} ${spacing.sm} ${spacing.sm}`,
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
    },
  }))(settingsForm);
};
