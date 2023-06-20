const detectPathChanges = function(callback) {
  var pushState = history.pushState;
  var replaceState = history.replaceState;

  history.pushState = function () {
    pushState.apply(history, arguments);
    window.dispatchEvent(new Event('pushstate'));
    window.dispatchEvent(new Event('locationchange'));
  };

  history.replaceState = function () {
    replaceState.apply(history, arguments);
    window.dispatchEvent(new Event('replacestate'));
    window.dispatchEvent(new Event('locationchange'));
  };

  // This catches browser back, but also triggers duplicate log on menu clicks, TODO: fix.
  window.addEventListener('popstate', function () {
    window.dispatchEvent(new Event('locationchange'));
  });

  window.addEventListener('locationchange', function () {
    // execute callback function if it exists
    if (typeof callback === 'function') {
      callback();
    } else {
      console.warn('No callback passed or callback is not a function');
      return true;
    }
  })
}

export default detectPathChanges;