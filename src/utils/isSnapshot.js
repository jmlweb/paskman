function isSnapshot() {
  if (!navigator || !navigator.userAgent || !window) {
    return false
  };
  if (navigator.userAgent.match(/Node\.js/i) && window.reactSnapshotRender) {
    return true;
  }
  return false;
}

export default isSnapshot;
