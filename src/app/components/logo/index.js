import React from 'react';
import SvgIcon from '../svgicon';
import style from './style.scss';
import logoSvg from './logo.svg';

export default function () {
  return (
    <span className={style.logo}>
      <SvgIcon svg={logoSvg} />
      <span className={style.text}>PASKMAN</span>
    </span>
  );
}
