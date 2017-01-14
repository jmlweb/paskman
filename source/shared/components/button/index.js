import { css, withStyles } from '../../with-styles';
import {
  lighten,
  darken,
  desaturate,
} from '../../utils/color-functions';
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

  return withStyles(({ color, flex, spacing, unit }) => ({
    button: {
      display: flex.display,
      justifyContent: flex.center,
      alignItems: flex.center,
      minWidth: unit(7),
      backgroundColor: color.foam,
      border: `2px solid ${lighten(color.blueBayoux, 20)}`,
      padding: `${spacing.sm} ${spacing.md}`,
      color: color.blueBayoux,
      fontSize: unit(3),
      fontWeight: 700,
      textTransform: 'uppercase',
      transition: '0.2s ease-out',
      ':hover': {
        backgroundColor: desaturate(color.foam, 25),
        color: darken(color.blueBayoux, 10),
        border: `2px solid ${lighten(color.blueBayoux, 10)}`,
      },
    },
    img: {
      marginRight: spacing.xs,
    },
  }))(button);
};
