(function () {
  "use strict";

  var USERNAME_SELECTORS = [
    "#LA_input-number-01",
    "input[name='id'][type='tel']",
    "input.JS_jmbNo"
  ];

  function patchUsernameField(input) {
    if (!input || input.dataset.jalBitwardenPatched === "true") {
      return;
    }

    input.dataset.jalBitwardenPatched = "true";
    input.setAttribute("autocomplete", "username");
    input.setAttribute("inputmode", "numeric");
    input.setAttribute("autocapitalize", "none");
    input.setAttribute("spellcheck", "false");

    if (!input.getAttribute("aria-label")) {
      input.setAttribute("aria-label", "JMB membership number username");
    }
  }

  function patchPage() {
    USERNAME_SELECTORS.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(patchUsernameField);
    });
  }

  patchPage();

  var observer = new MutationObserver(patchPage);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
