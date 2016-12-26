'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var action = _ref.action,
      actionLabel = _ref.actionLabel;
  return _react2.default.createElement(
    'button',
    { onClick: action },
    actionLabel
  );
};

Button.propTypes = {
  action: _react.PropTypes.func.isRequired,
  actionLabel: _react.PropTypes.string.isRequired
};

exports.default = Button;