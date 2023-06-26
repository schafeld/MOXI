const detectRouteChanges = (callback) => {
  if (window.$nuxt === undefined || window.$nuxt.$router === undefined) {
    console.warn('detectRouteChanges: Nuxt or Nuxt Router is not defined.');
    return false;
  }

  window.$nuxt.$router.afterHooks.push(function moxiRouterAfterHook() {
    if (typeof callback === 'function') {
      callback();
    }
  });
}

export default detectRouteChanges;