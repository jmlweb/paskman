'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _button = require('../components/button');

var _button2 = _interopRequireDefault(_button);

var _timerActions = require('../actions/timer-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    action: function action() {
      dispatch((0, _timerActions.toggleEnabled)());
    },
    actionLabel: 'Start timer'
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(_button2.default);