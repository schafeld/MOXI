const detectPathChanges = function(callback) {
  var pushState = history.pushState;
  var replaceState = history.replaceState;

  let lastPath = "";

  if (typeof callback !== 'function' && callback !== undefined) {
    console.warn('detectPathChanges: Callback is not a function.');
    return true;
  }

  function actionOnNavigation() {
    // execute callback function if it exists and if the path has changed
    if (typeof callback === 'function' && location.pathname + location.hash !== lastPath) {
      callback();
      lastPath = location.pathname + location.hash;
    }
  }


  history.pushState = function () {
    pushState.apply(history, arguments);
    window.dispatchEvent(new Event('pushstate'));
  };

  history.replaceState = function () {
    replaceState.apply(history, arguments);
    window.dispatchEvent(new Event('replacestate'));
  };


  window.addEventListener('pushstate', function () {
    actionOnNavigation();
  });

  window.addEventListener('replacestate', function () {
    actionOnNavigation();
  });

  window.addEventListener('popstate', function () {
    actionOnNavigation();
  });
}

export default detectPathChanges;