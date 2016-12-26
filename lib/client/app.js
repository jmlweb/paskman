'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reduxImmutable = require('redux-immutable');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _timerReducer = require('./reducers/timer-reducer');

var _timerReducer2 = _interopRequireDefault(_timerReducer);

var _timerClock = require('./containers/timer-clock');

var _timerClock2 = _interopRequireDefault(_timerClock);

var _timerButton = require('./containers/timer-button');

var _timerButton2 = _interopRequireDefault(_timerButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)((0, _reduxImmutable.combineReducers)({
  timer: _timerReducer2.default
}));

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_timerClock2.default, null),
    _react2.default.createElement(_timerButton2.default, null)
  )
), document.querySelector('.app'));