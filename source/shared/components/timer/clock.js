import { PropTypes } from 'react';
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
  msg: {
    textAlign: 'center',
    fontSize: '18px',
    color: baseStyles.colors.heath,
    padding: [baseStyles.spacing.md, baseStyles.spacing.sm],
    fontWeight: 500,
  },
});

export default React => props => Object.assign(
  {},
  <div className={css(styles.clock)}>
    <p className={css(styles.msg)}>{props.msg}</p>
    {toClock(props.amount)}
  </div>,
  {
    propTypes: {
      amount: PropTypes.number,
      msg: PropTypes.string,
    },
  },
);
