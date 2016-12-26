'use strict';

var _redux = require('redux');

var _reduxImmutable = require('redux-immutable');

var _chai = require('chai');

var _mocha = require('mocha');

var _timerReducer = require('../../client/reducers/timer-reducer');

var _timerReducer2 = _interopRequireDefault(_timerReducer);

var _timerActions = require('../../client/actions/timer-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies, no-unused-expressions */

(0, _chai.should)();
var store = void 0;

(0, _mocha.describe)('App State', function () {
  (0, _mocha.describe)('Timer', function () {
    (0, _mocha.beforeEach)(function () {
      store = (0, _redux.createStore)((0, _reduxImmutable.combineReducers)({
        timer: _timerReducer2.default
      }));
    });
    (0, _mocha.describe)('toggleEnabled', function () {
      (0, _mocha.it)('should make isEnabled go from false to true and vice versa', function () {
        store.getState().getIn(['timer', 'isEnabled']).should.be.false;
        store.dispatch((0, _timerActions.toggleEnabled)());
        store.getState().getIn(['timer', 'isEnabled']).should.be.true;
      });
    });
  });
});