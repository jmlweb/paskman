import React, { PropTypes } from 'react';
import classNames from 'classnames';
import closeSvg from './close.svg';
import SvgIcon from '../svgicon';
import style from './style.scss';

const {
  string,
  func,
  bool,
  oneOfType,
  objectOf,
  arrayOf,
  any,
} = PropTypes;

const ModalView = ({ title, toggleModal, modalOpen, children }) => (
  <div className={classNames(style.modal, modalOpen && style.active)}>
    <div className={style.topbar}>
      <h3 className={style.title}>{title}</h3>
      <button className={style.close} onClick={toggleModal}><SvgIcon svg={closeSvg} /></button>
    </div>
    <div className={style.content}>
      {children}
    </div>
  </div>
);

ModalView.propTypes = {
  title: string.isRequired,
  toggleModal: func.isRequired,
  modalOpen: bool.isRequired,
  children: oneOfType([
    objectOf(any),
    arrayOf(any),
  ]).isRequired,
};

export default ModalView;
