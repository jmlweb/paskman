import { IndexLink, Link } from 'react-router';
import { css, withStyles } from '../../with-styles';
import createLogo from '../logo';
import { createFlexBox } from '../../layouts/flex';

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
          <FlexBox items="itemsCenter">
            <nav {...menuClassNames}>
              <IndexLink {...css(styles.menuItem)} to="/">Home</IndexLink>
              <Link {...css(styles.menuItem)} to="/settings">Settings</Link>
            </nav>
            <button onClick={toggleOpen} {...css(styles.triggerMenu)}>
              <img {...btnClassNames} src="/img/trigger-menu.svg" alt="Menu" />
            </button>
          </FlexBox>
        </FlexBox>
      </header>
    );
  };

  navbar.propTypes = {
    isOpen: bool.isRequired,
    toggleOpen: func.isRequired,
    styles: objectOf(any),
  };

  return withStyles(({ color, font, spacing, unit }) => ({
    header: {
      backgroundColor: color.sweetPink,
      padding: spacing.sm,
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
    rotated: {
      transform: 'rotate(90deg)',
    },
    menu: {
      marginRight: spacing.lg,
      overflow: 'hidden',
      maxWidth: 0,
    },
    expanded: {
      maxWidth: unit(120),
    },
    menuItem: {
      marginLeft: spacing.xl,
      lineHeight: 1.4,
      fontWeight: font.bold,
      color: color.heath,
      textTransform: 'uppercase',
    },
  }))(navbar);
};
