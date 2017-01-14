import { StyleSheet, css } from 'aphrodite/no-important';
import tinycolor from 'tinycolor2';
import createSafeSVG from '../safe-svg';
import baseStyles from '../../constants/styles';

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '160px',
    backgroundColor: baseStyles.colors.foam,
    border: '2px solid rgba(36,69,69,0.40)',
    padding: `${baseStyles.spacing.sm} ${baseStyles.spacing.md}`,
    color: baseStyles.colors.blueBayoux,
    fontSize: '18px',
    fontWeight: 700,
    textTransform: 'uppercase',
    transition: '0.2s ease-out',
    ':hover': {
      backgroundColor: tinycolor(baseStyles.colors.foam).desaturate(25).toString(),
      color: tinycolor(baseStyles.colors.blueBayoux).darken(10).toString(),
    },
  },
  img: {
    marginRight: baseStyles.spacing.xs,
  },
});

export default (React) => {
  const {
    string,
    func,
  } = React.PropTypes;

  const SafeSVG = createSafeSVG(React);

  const getIcon = (icon) => {
    if (icon) {
      return <SafeSVG className={css(styles.img)} filename={icon} />;
    }
    return '';
  };

  const button = (props) => {
    const { action, actionLabel, icon, ...rest } = props;
    return (
      <button
        className={css(styles.button)}
        {...rest}
        onClick={action}
      >
        {getIcon(icon)} {actionLabel}
      </button>
    );
  };

  button.propTypes = {
    action: func.isRequired,
    actionLabel: string.isRequired,
    icon: string,
  };

  return button;
};
