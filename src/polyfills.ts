// window.requestIdleCallback and window.cancelIdleCallback
if (!("requestIdleCallback" in window)) {
  const deadline: IdleDeadline = {
    timeRemaining: () => 0,
    didTimeout: true
  };
  window.requestIdleCallback = (cb, { timeout }) => {
    return window.setTimeout(() => cb(deadline), timeout || 500);
  };
  window.cancelIdleCallback = window.clearTimeout;
}
