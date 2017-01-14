import { css, withStyles } from '../../with-styles';
import { toClock } from '../../utils/parse-time';

export default (React) => {
  const {
    number,
    objectOf,
    any,
  } = React.PropTypes;

  const clock = ({ styles, amount }) => (
    <div {...css(styles.clock)}>
      {toClock(amount)}
    </div>
  );

  clock.propTypes = {
    amount: number,
    styles: objectOf(any),
  };

  return withStyles(({ color, font, unit }) => ({
    clock: {
      textAlign: 'center',
      fontSize: unit(6),
      color: color.heath,
      fontWeight: font.medium,
    },
  }))(clock);
};
