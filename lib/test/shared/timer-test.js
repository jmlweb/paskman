'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _sinon = require('sinon');

var _sinonChai = require('sinon-chai');

var _sinonChai2 = _interopRequireDefault(_sinonChai);

var _mocha = require('mocha');

var _timer = require('../../shared/timer');

var _timer2 = _interopRequireDefault(_timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.should(); /* eslint-disable import/no-extraneous-dependencies, no-console */

_chai2.default.use(_sinonChai2.default);

(0, _mocha.describe)('Shared', function () {
  (0, _mocha.describe)('Timer', function () {
    (0, _mocha.describe)('statusInConsole', function () {
      (0, _mocha.it)('should print status string', function () {
        (0, _sinon.stub)(console, 'log');
        new _timer2.default(false).statusInConsole();
        console.log.should.have.been.calledWith('My status is false');
        console.log.restore();
      });
    });
  });
});