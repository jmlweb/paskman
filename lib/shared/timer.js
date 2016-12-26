"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timer = function () {
  function Timer(enabled) {
    _classCallCheck(this, Timer);

    this.enabled = enabled;
  }

  _createClass(Timer, [{
    key: "status",
    value: function status() {
      return "My status is " + this.enabled.toString();
    }
  }, {
    key: "statusInConsole",
    value: function statusInConsole() {
      /* eslint-disable no-console */
      console.log(this.status());
      /* eslint-enable no-console */
    }
  }]);

  return Timer;
}();

exports.default = Timer;