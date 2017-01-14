import { StyleSheet, css } from 'aphrodite/no-important';
import { toClock } from '../../utils/parse-time';
import baseStyles from '../../constants/styles';

const styles = StyleSheet.create({
  clock: {
    textAlign: 'center',
    fontSize: '36px',
    color: baseStyles.colors.heath,
    fontWeight: 500,
  },
});

export default (React) => {
  const { number } = React.PropTypes;

  const clock = props => (
    <div className={css(styles.clock)}>
      {toClock(props.amount)}
    </div>
  );

  clock.propTypes = {
    amount: number,
  };

  return clock;
};
