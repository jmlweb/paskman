'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function Message(_ref) {
  var message = _ref.message;
  return _react2.default.createElement(
    'div',
    null,
    message
  );
};

Message.propTypes = {
  message: _react.PropTypes.string.isRequired
};

exports.default = Message;