import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.scss';

const app = <div className={style.greetings}>Hello, World 2!</div>;

if (typeof ISOMORPHIC_WEBPACK === 'undefined') {
  ReactDOM.render(app, document.getElementById('app'));
}

export default app;
