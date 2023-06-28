const detectDomChanges = function() {
  const mutationObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {

      if (mutation.addedNodes.length) {
        // Beware: Avoid infinity loop. Don't inject stuff into observer target without some kind of stop flag. And test very thoroughly whether that works!
        console.log(mutation.addedNodes[0], " added");
        // Insert reaction to changed page, i.e. added or modified DOM nodes, here.
      }
      
      // Works usually without paying attention to removed nodes.
      if (mutation.removedNodes.length) { console.log("MOXI: ", mutation.removedNodes[0], " removed"); }

      /* TODO
      if (!isTargetUrl()) {
        console.log("Path is not target. Destroy observer.");
        mutationObserver.disconnect();
      }
      */
    })
  });

  // Try to keep as "low"/narrow as possible for performance reasons.
  const observedElement = document.querySelector('body');

  mutationObserver.observe(observedElement, {
    attributes: true, // false usually good enough
    childList: true,
    subtree: true,
  });
}

export default detectDomChanges;