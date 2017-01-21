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
    const { styles, size = 'md', actionLabel, icon, ...rest } = props;
    delete rest.theme;
    const buttonStyles = css(
      styles.button,
      styles[size],
    );
    return (
      <button
        {...buttonStyles}
        {...rest}
      >
        {getIcon(icon, styles)} {actionLabel}
      </button>
    );
  };

  button.propTypes = {
    size: string,
    onClick: func,
    actionLabel: string.isRequired,
    icon: string,
    styles: objectOf(any),
  };

  return withStyles(({ color, flex, mq, spacing, unit }) => ({
    md: {
      minWidth: unit(7),
      padding: `${spacing.sm} ${spacing.md}`,
      fontSize: unit(3),
    },
    lg: {
      minWidth: unit(7),
      padding: `${spacing.md} ${spacing.md}`,
      fontSize: unit(3.4),
      [mq.md]: {
        minWidth: unit(9),
        padding: `${spacing.md} ${spacing.lg}`,
        fontSize: unit(4),
      },
    },
    button: {
      display: flex.display,
      justifyContent: flex.center,
      alignItems: flex.center,
      backgroundColor: color.foam,
      border: `2px solid ${lighten(color.blueBayoux, 20)}`,
      color: color.blueBayoux,
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
