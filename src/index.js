import logger from "./lib/helper/logger";
import detectHistoryChange from "./lib/navigation/detectHistoryChange";

try {
  logger("Log 1.");

  // pass logger with a text argument to the callback
  detectHistoryChange( () => logger("Navigated to a new view / hash-route."));
}
catch (e) {
  console.error(e);
}
