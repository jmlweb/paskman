import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'react-router/lib/Link';
import SvgIcon from '../../../svgicon';
import backlogSvg from './backlog.svg';
import timerSvg from './timer.svg';
import settingsSvg from './settings.svg';
import userSvg from './user.svg';
import style from './style.scss';

const {
  bool,
  func,
  number,
} = PropTypes;

const Menu = ({ menuOpen, handleTouchMove, lastY, toggleMenu, opacity }) =>
  <ul
    className={classNames(style.menu, menuOpen && style.open)}
    onTouchMove={handleTouchMove}
    style={{ height: lastY }}
  >
    <li style={{ opacity }}>
      <Link to="/" onClick={toggleMenu}>
        <SvgIcon className={style.icon} svg={timerSvg} /> Dashboard
      </Link>
    </li>
    <li style={{ opacity }}>
      <Link to="/backlog" onClick={toggleMenu}>
        <SvgIcon className={style.icon} svg={backlogSvg} /> Backlog
      </Link>
    </li>
    <li>
      <a href="/">
        <SvgIcon className={style.icon} svg={settingsSvg} /> Settings
      </a>
    </li>
    <li>
      <a href="/">
        <SvgIcon className={style.icon} svg={userSvg} /> User
      </a>
    </li>
  </ul>;

Menu.propTypes = {
  menuOpen: bool.isRequired,
  handleTouchMove: func.isRequired,
  toggleMenu: func.isRequired,
  lastY: number.isRequired,
  opacity: number.isRequired,
};

export default Menu;
