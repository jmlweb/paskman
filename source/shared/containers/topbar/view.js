import { IndexLink, Link } from 'react-router';
import { css, withStyles } from '../../with-styles';
import createLogo from '../../components/logo';
import { createFlexBox } from '../../layouts/flex';
import { lighten } from '../../utils/color-functions';

export default (React) => {
  const {
    bool,
    func,
    objectOf,
    any,
  } = React.PropTypes;

  const Logo = createLogo(React);
  const FlexBox = createFlexBox(React);

  const navbar = (props) => {
    const { isOpen, toggleOpen, styles } = props;
    const menuClassNames = css(
      styles.menu,
      styles.transition,
      isOpen && styles.expanded,
    );
    const btnClassNames = css(
      styles.btn,
      styles.transition,
      isOpen && styles.rotated,
    );
    return (
      <header {...css([styles.header])}>
        <FlexBox items="itemsCenter">
          <IndexLink {...css(styles.logoLink)} to="/">
            <FlexBox items="itemsCenter">
              <Logo />
              <span {...css(styles.logoText)}>PASKMAN</span>
            </FlexBox>
          </IndexLink>
          <div {...css(styles.menuWrapper)}>
            <nav {...menuClassNames}>
              <IndexLink onClick={toggleOpen} {...css(styles.menuItem)} to="/">Home</IndexLink>
              <Link onClick={toggleOpen} {...css(styles.menuItem)} to="/settings">Settings</Link>
            </nav>
            <button onClick={toggleOpen} {...css(styles.triggerMenu)}>
              <img {...btnClassNames} src="/img/trigger-menu.svg" alt="Menu" />
            </button>
          </div>
        </FlexBox>
      </header>
    );
  };

  navbar.propTypes = {
    isOpen: bool.isRequired,
    toggleOpen: func.isRequired,
    styles: objectOf(any),
  };

  return withStyles(({ color, font, mq, spacing, unit }) => ({
    header: {
      backgroundColor: color.sweetPink,
      padding: spacing.sm,
      [mq.lg]: {
        padding: `${spacing.sm} ${spacing.md}`,
      },
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logoLink: {
      display: 'inline-block',
    },
    logoText: {
      marginLeft: spacing.xs,
      fontSize: unit(4),
      fontWeight: font.bold,
      color: color.heath,
    },
    transition: {
      transition: '0.4s ease-in-out',
    },
    btn: {
      [mq.lg]: {
        display: 'none',
      },
    },
    rotated: {
      transform: 'rotate(90deg)',
    },
    menuWrapper: {
      display: 'flex',
    },
    menu: {
      right: 0,
      position: 'absolute',
      overflow: 'hidden',
      maxHeight: 0,
      top: '63px',
      width: '100%',
      borderBottom: `3px solid ${lighten(color.heath, 40)}`,
      zIndex: 9,
      [mq.lg]: {
        position: 'static',
        maxHeight: unit(120),
        borderBottom: 0,
        width: 'auto',
        marginRight: `-${spacing.sm}`,
      },

    },
    expanded: {
      maxHeight: unit(120),
    },
    menuItem: {
      background: color.heath,
      color: '#fff',
      display: 'block',
      lineHeight: 1.4,
      fontWeight: font.bold,
      textTransform: 'uppercase',
      padding: spacing.sm,
      textAlign: 'center',
      width: '100%',
      borderBottom: `1px solid ${lighten(color.heath, 25)}`,
      [mq.lg]: {
        display: 'inline-block',
        background: 'transparent',
        color: color.heath,
        borderBottom: 0,
        width: 'auto',
        ':last-child': {
          marginRight: `-${spacing.sm}`,
        },
      },
    },
  }))(navbar);
};
