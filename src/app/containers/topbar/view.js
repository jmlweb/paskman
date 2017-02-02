import React from 'react';
import classNames from 'classnames';
import Logo from '../../components/logo';
import SvgIcon from '../../components/svgicon';
import closedSvg from './closed.svg';
import openSvg from './open.svg';
import style from './style.scss';

const { bool, func } = React.PropTypes;

function TopbarView(props) {
  return (
    <div className={style.topbar}>
      <div className={style.wrapper}>
        <Logo />
        <div className={style.nav}>
          <button
            className={style.btn}
            onClick={props.toggleMenu}
          >
            <SvgIcon svg={props.menuOpen ? openSvg : closedSvg} />
          </button>
          <ul className={classNames(style.menu, props.menuOpen && style.open)}>
            <li><a href="/">Timer</a></li>
            <li><a href="/">Backlog</a></li>
            <li><a href="/">Settings</a></li>
            <li><a href="/">User</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

TopbarView.propTypes = {
  menuOpen: bool.isRequired,
  toggleMenu: func.isRequired,
};

export default TopbarView;
