const logger = (text) => {
  // TODO: replace with logger or something
  // or import DOM-feature-changing functions from other files
    console.log("MOXI says: " + text + " is valid path.");
}

const pathActions = {
  exact: {
    // register singular page
    'home': {
      path: '/',
      action: () => {logger('home')}
    },
    'login': {
      path: '/login/',
      action: () => {logger('login')}
    },
    'cart': {
      path: '/cart/',
      action: () => {logger('cart')}
    }
  },
  partial: {
    // register pages of a type
    'anyPDP': {
      pathPart: '/p/',
      action: () => {logger('anyPDP')}
    },
    // 'anyPLP': {
    //   pathPart: '/c/',
    //   action: () => {logger('anyPLP')}
    // },
    'anyCheckout': {
      pathPart: '/checkout/',
      action: () => {logger('anyCheckout')}
    }
  }
}

export default pathActions;