// import { StyleSheet, css } from 'aphrodite/no-important';
import tinycolor from 'tinycolor2';
import { css, withStyles } from '../../with-styles';
import createSafeSVG from '../safe-svg';

export default (React) => {
  const {
    string,
    func,
    objectOf,
    any,
  } = React.PropTypes;

  const SafeSVG = createSafeSVG(React);

  const getIcon = (icon, styles) => {
    if (icon) {
      return <SafeSVG {...css(styles.img)} filename={icon} />;
    }
    return '';
  };

  const button = (props) => {
    const { styles, action, actionLabel, icon, ...rest } = props;
    delete rest.theme;
    return (
      <button
        {...css(styles.button)}
        {...rest}
        onClick={action}
      >
        {getIcon(icon, styles)} {actionLabel}
      </button>
    );
  };

  button.propTypes = {
    action: func.isRequired,
    actionLabel: string.isRequired,
    icon: string,
    styles: objectOf(any),
  };

  return withStyles(({ color, spacing }) => ({
    button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: '160px',
      backgroundColor: color.foam,
      border: '2px solid rgba(36,69,69,0.40)',
      padding: `${spacing.sm} ${spacing.md}`,
      color: color.blueBayoux,
      fontSize: '18px',
      fontWeight: 700,
      textTransform: 'uppercase',
      transition: '0.2s ease-out',
      ':hover': {
        backgroundColor: tinycolor(color.foam).desaturate(25).toString(),
        color: tinycolor(color.blueBayoux).darken(10).toString(),
      },
    },
    img: {
      marginRight: spacing.xs,
    },
  }))(button);
};
