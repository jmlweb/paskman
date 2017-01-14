import { IndexLink, Link } from 'react-router'
import { StyleSheet, css } from 'aphrodite/no-important';
import createLogo from '../logo';
import baseStyles from '../../constants/styles';


export default (React) => {
  const {
    bool,
    func,
  } = React.PropTypes;

  const Logo = createLogo(React);

  const navbar = (props) => {
    const { isOpen, toggleOpen } = props;
    const btnClassNames = css(
      styles.transition,
      isOpen && styles.rotated,
    );
    const menuClassNames = css(
      styles.menu,
      styles.transition,
      isOpen && styles.expanded,
    )
    return (
      <header className={css([styles.header, styles.flex])}>
        <IndexLink className={css(styles.flex)} to="/">
          <Logo />
          <span className={css(styles.logoText)}>PASKMAN</span>
        </IndexLink>
        <div className={css(styles.flex)}>
          <nav className={menuClassNames}>
            <IndexLink className={css(styles.menuItem)} to="/">Home</IndexLink>
            <Link className={css(styles.menuItem)} to="/settings">Settings</Link>
          </nav>
          <button onClick={toggleOpen} className={css(styles.triggerMenu)}>
            <img className={btnClassNames} src="/img/trigger-menu.svg" alt="Menu" />
          </button>
        </div>
      </header>
    );
  };

  const styles = StyleSheet.create({
    header: {
      backgroundColor: baseStyles.colors.sweetPink,
      padding: baseStyles.spacing.sm,
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logoText: {
      marginLeft: baseStyles.spacing.xs,
      fontSize: '24px',
      fontWeight: 700,
      color: baseStyles.colors.heath,
    },
    transition: {
      transition: '0.4s ease-in-out',
    },
    rotated: {
      transform: 'rotate(90deg)',
    },
    menu: {
      marginRight: '20px',
      overflow: 'hidden',
      maxWidth: 0,
    },
    expanded: {
      maxWidth: '1000px',
    },
    menuItem: {
      marginLeft: '30px',
      lineHeight: 1.4,
      fontWeight: 700,
      color: baseStyles.colors.heath,
      textTransform: 'uppercase',
    },
  });

  navbar.propTypes = {
    isOpen: bool.isRequired,
    toggleOpen: func.isRequired,
  };

  return navbar;
};
