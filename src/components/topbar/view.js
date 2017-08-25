import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo';
import Menu from './components/menu';
import SvgIcon from '../svgicon';
import closedSvg from './closed.svg';
import openSvg from './open.svg';
import style from './style.scss';

const {
  bool,
  func,
  number,
} = PropTypes;

function TopbarView({ toggleMenu, menuOpen, handleTouchMove, lastY, opacity }) {
  return (
    <div className={style.topbar}>
      <div className={style.wrapper}>
        <Logo />
        <div className={style.nav}>
          <button
            className={style.btn}
            onClick={toggleMenu}
          >
            <SvgIcon svg={menuOpen ? openSvg : closedSvg} />
          </button>
          <Menu
            menuOpen={menuOpen}
            toggleMenu={toggleMenu}
            handleTouchMove={handleTouchMove}
            lastY={lastY}
            opacity={opacity}
          />
        </div>
      </div>
    </div>
  );
}

TopbarView.defaultProps = {
  opacity: 1,
};

TopbarView.propTypes = {
  menuOpen: bool.isRequired,
  toggleMenu: func.isRequired,
  handleTouchMove: func.isRequired,
  lastY: number.isRequired,
  opacity: number,
};

export default TopbarView;
