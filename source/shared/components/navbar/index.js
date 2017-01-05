import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import createLogo from '../logo';
import baseStyles from '../../constants/styles';

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
    transition: '0.4s ease-out',
  },
  rotated: {
    transform: 'rotate(90deg)',
  },
});

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const Logo = createLogo(React);
    const btnClassNames = css(
      styles.transition,
      this.state.isOpen && styles.rotated,
    );
    return (
      <header className={css([styles.header, styles.flex])}>
        <span className={css(styles.flex)}>
          <Logo />
          <span className={css(styles.logoText)}>PASKMAN</span>
        </span>
        <button onClick={this.toggleOpen} className={css(styles.triggerMenu)}>
          <img className={btnClassNames} src="/img/trigger-menu.svg" alt="Menu" />
        </button>
      </header>
    );
  }
}


export default Navbar;
