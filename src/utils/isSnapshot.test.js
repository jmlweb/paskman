import isSnapshot from './isSnapshot';

Object.defineProperty(window.navigator, "userAgent", (function(_value){
  return {
    get: function _get() {
      return _value;
    },
    set: function _set(v) {
        _value = v;
    }
  };
})(window.navigator.userAgent));
Object.defineProperty(window, "reactSnapshotRender", (function(_value){
  return {
    get: function _get() {
      return _value;
    },
    set: function _set(v) {
        _value = v;
    }
  };
})(window.reactSnapshotRender));

describe('isSnapshot', () => {
  it('should return false', () => {
    expect(isSnapshot()).toBe(false);
  });
  it('should return true', () => {
    window.navigator.userAgent = 'Node.js';
    window.reactSnapshotRender = true;
    expect(isSnapshot()).toBe(true);
  });
  it('should return false', () => {
    window.navigator.userAgent = null;
    window.reactSnapshotRender = false;
    expect(isSnapshot()).toBe(false);
  });
});
