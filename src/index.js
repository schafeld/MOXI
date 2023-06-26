import logger from "./lib/helper/logger";
import detectHistoryChanges from "./lib/navigation/detectHistoryChanges";
import detectDomChanges from "./lib/dom/detectDomChanges";
import detectRouteChanges from "./lib/navigation/nuxt/detectRouteChanges";

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
