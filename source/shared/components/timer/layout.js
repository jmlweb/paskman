import { StyleSheet, css } from 'aphrodite/no-important';
import baseStyles from '../../constants/styles';

const styles = StyleSheet.create({
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
    element,
  } = React.PropTypes;

  const layout = (props) => {
    const { clock, button, ...rest } = props;
    return (
      <div {...rest}>
        <div className={css(styles.clock)}>
          {clock}
        </div>
        <div className={css(styles.button)}>
          {button}
        </div>
      </div>
    );
  };

  layout.propTypes = {
    clock: element.isRequired,
    button: element.isRequired,
  };

  return layout;
};
