function isSnapshot() {
  if (!window || !window.navigator || !window.navigator.userAgent) {
    return false
  };
  if (window.navigator.userAgent.match(/Node\.js/i) && window.reactSnapshotRender) {
    return true;
  }
  return false;
}

export default isSnapshot;
