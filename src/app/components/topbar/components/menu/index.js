import React from 'react';
import classNames from 'classnames';
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
} = React.PropTypes;

const Menu = props =>
  <ul
    className={classNames(style.menu, props.menuOpen && style.open)}
    onTouchMove={props.handleTouchMove}
    style={{ height: props.lastY }}
  >
    <li>
      <a href="/">
        <SvgIcon className={style.icon} svg={timerSvg} /> Timer
      </a>
    </li>
    <li>
      <a href="/">
        <SvgIcon className={style.icon} svg={backlogSvg} /> Backlog
      </a>
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
  lastY: number.isRequired,
};

export default Menu;
