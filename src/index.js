import logger from "./lib/helper/logger.mjs";
// import detectHistoryChanges from "./lib/navigation/detectHistoryChanges.js";
import detectDomChanges from "./lib/dom/detectDomChanges.js";
import detectRouteChanges from "./lib/navigation/nuxt/detectRouteChanges.js";

// Execute specific actions based on path:
// import executePathAction from "./lib/helper/executePathAction.mjs";

// Just to detect if page or page type is eligible for action:
import isValidPath from "./lib/helper/isValidPath.mjs";

try {
  logger("Started MOXI script.");

  // for generic SPAs: pass logger with a text argument to the callback
  // detectHistoryChanges( () => logger("Navigated to a new view / hash-route:" + location.pathname + location.hash));

  // For Nuxt Router SPAs: pass logger with a text argument to the callback
  detectRouteChanges( () => {
    logger("MOXI: Navigated to a new route: " + window.$nuxt.$route.path);

    if (isValidPath()) {
      logger("Path is valid.");
    } else {
      logger("Path is not valid.");
    }

    // executePathAction();
  });

  detectDomChanges();
}
catch (e) {
  console.error(e);
}
