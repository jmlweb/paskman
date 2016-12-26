'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleEnabled = exports.TOGGLE_ENABLED = undefined;

var _reduxActions = require('redux-actions');

var TOGGLE_ENABLED = exports.TOGGLE_ENABLED = 'TOGGLE_ENABLED';
var toggleEnabled = exports.toggleEnabled = (0, _reduxActions.createAction)(TOGGLE_ENABLED, function () {
  return true;
});