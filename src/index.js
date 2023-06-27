import logger from "./lib/helper/logger.mjs";
import detectHistoryChanges from "./lib/navigation/detectHistoryChanges.js";
import detectDomChanges from "./lib/dom/detectDomChanges.js";
import detectRouteChanges from "./lib/navigation/nuxt/detectRouteChanges.js";

try {
  logger("Started script.");

  // pass logger with a text argument to the callback
  detectHistoryChanges( () => logger("Navigated to a new view / hash-route:" + location.pathname + location.hash));

  // pass logger with a text argument to the callback
  detectRouteChanges( () => logger("Navigated to a new route: " + window.$nuxt.$route.path));

  detectDomChanges();
}
catch (e) {
  console.error(e);
}
