import { StyleSheet, css } from 'aphrodite/no-important';
import baseStyles from '../../constants/styles';
import createTimerCircle from './circle';
import createTimerClock from './clock';
import createTimerButton from './button';

const styles = StyleSheet.create({
  circle: {
    padding: baseStyles.spacing.lg,
    paddingBottom: baseStyles.spacing.md,
    display: 'flex',
    justifyContent: 'center',
  },
  clock: {
    padding: baseStyles.spacing.lg,
    paddingBottom: baseStyles.spacing.md,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    padding: baseStyles.spacing.lg,
  },
});

export default (React) => {
  const {
    string,
    number,
    bool,
    func,
  } = React.PropTypes;

  const TimerCircle = createTimerCircle(React);
  const TimerClock = createTimerClock(React);
  const TimerButton = createTimerButton(React);

  const layout = (props) => {
    const { msg, amountTime, progress, isActive, isToggling, toggleAction, ...rest } = props;

    return (
      <div {...rest}>
        <div className={css(styles.circle)}>
          <TimerCircle
            progress={progress}
          />
        </div>
        <div className={css(styles.clock)}>
          <TimerClock
            msg={msg}
            amount={amountTime}
          />
        </div>
        <div className={css(styles.button)}>
          <TimerButton
            isActive={isActive}
            isToggling={isToggling}
            toggleAction={toggleAction}
          />
        </div>
      </div>
    );
  };

  layout.propTypes = {
    msg: string.isRequired,
    amountTime: number.isRequired,
    progress: number.isRequired,
    isActive: bool,
    isToggling: bool,
    toggleAction: func.isRequired,
  };

  return layout;
};
