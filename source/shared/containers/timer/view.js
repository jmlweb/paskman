import { css, withStyles } from '../../with-styles';
import createCircle from '../../components/circle';
import createClock from '../../components/clock';
import createProgress from '../../components/progress';
import createTimerButton from './components/button';
import { createFlexBox } from '../../layouts/flex';

const circleSize = 280;

export default (React) => {
  const {
    objectOf,
    any,
    number,
    bool,
    func,
  } = React.PropTypes;

  const FlexBox = createFlexBox(React);
  const Circle = createCircle(React);
  const Clock = createClock(React);
  const Progress = createProgress(React);
  const TimerButton = createTimerButton(React);

  const layout = (props) => {
    const { styles, amountTime, progress, isActive, isToggling, toggleAction, ...rest } = props;
    delete rest.theme;
    return (
      <div {...rest}>
        <div {...css(styles.circleWrapper)}>
          <div {...css(styles.progress)}>
            <Progress
              amount={progress}
            />
          </div>
          <div {...css(styles.circle)}>
            <Circle
              size={circleSize}
              progress={progress}
            />
          </div>
          <div {...css(styles.clock)}>
            <FlexBox items="itemsCenter" justify="justifyCenter" style={{ width: '100%', height: '100%' }}>
              <Clock
                amount={amountTime}
              />
            </FlexBox>
          </div>
        </div>
        <div {...css(styles.button)}>
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
    styles: objectOf(any),
    amountTime: number.isRequired,
    progress: number.isRequired,
    isActive: bool,
    isToggling: bool,
    toggleAction: func.isRequired,
  };

  return withStyles(({ mq, spacing }) => ({
    circleWrapper: {
      position: 'relative',
      margin: '0 auto',
      [mq.md]: {
        width: `${circleSize}px`,
        height: `${circleSize}px`,
      },
    },
    circle: {
      display: 'none',
      [mq.md]: {
        padding: `${spacing.lg} ${spacing.lg} ${spacing.md}`,
        display: 'flex',
        justifyContent: 'center',
      },
    },
    progress: {
      padding: `${spacing.lg} ${spacing.lg} ${spacing.xs}`,
      [mq.md]: {
        display: 'none',
      },
    },
    clock: {
      padding: `${spacing.lg} ${spacing.lg} ${spacing.md}`,
      [mq.md]: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    button: {
      display: 'flex',
      justifyContent: 'center',
      padding: spacing.lg,
    },
  }))(layout);
};
