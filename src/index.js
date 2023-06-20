import logger from "./lib/helper/logger";
import detectHistoryChange from "./lib/navigation/detectHistoryChange";

try {
  logger("Started script.");

  // pass logger with a text argument to the callback
  detectHistoryChange( () => logger("Navigated to a new view / hash-route:" + location.pathname + location.hash));
}
catch (e) {
  console.error(e);
}
