import React from 'react';
import classNames from 'classnames';
import style from './style.scss';

const Preloader = () =>
  <div className={style.preloader}>
    <div className={style.blobsWrapper}>
      <div className={classNames(style.blobs, style.leftTop)}>
        <div className={classNames(style.blob, style.primary)} />
        <div className={classNames(style.blob, style.primary)} />
        <div className={classNames(style.blob, style.primary)} />
      </div>

      <div className={classNames(style.blobs, style.rightBottom)}>
        <div className={classNames(style.blob, style.secondary)} />
        <div className={classNames(style.blob, style.secondary)} />
        <div className={classNames(style.blob, style.secondary)} />
      </div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
          </filter>
      </defs>
    </svg>
  </div>;

export default Preloader;
