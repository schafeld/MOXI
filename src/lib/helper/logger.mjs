const logger = function(text) {
  if (typeof text === "string") {
    console.log(text);
  }
  else {
    console.log("MOXI: No text passed to logger.");
  }
}

export default logger;