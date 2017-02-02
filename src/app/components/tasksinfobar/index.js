import React from 'react';
import SvgIcon from '../svgicon';
import style from './style.scss';
import addSvg from './add.svg';

export default function () {
  return (
    <div className={style.tasksInfoBar}>
      <div className={style.info}>
        <p className={style.infoText}>
          <span className={style.strong}>No</span> tasks pending in your list
        </p>
        <p className={style.infoText}>
          <span className={style.strong}>00:00:00</span> planned
        </p>
      </div>
      <button className={style.btn}>
        <SvgIcon svg={addSvg} />
      </button>
    </div>
  );
}
