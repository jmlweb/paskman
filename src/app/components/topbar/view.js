import React from 'react';
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
} = React.PropTypes;

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
          <Menu
            menuOpen={props.menuOpen}
            handleTouchMove={props.handleTouchMove}
            lastY={props.lastY}
          />
        </div>
      </div>
    </div>
  );
}

TopbarView.propTypes = {
  menuOpen: bool.isRequired,
  toggleMenu: func.isRequired,
  handleTouchMove: func.isRequired,
  lastY: number.isRequired,
};

export default TopbarView;
