/**
 * Script to replace variables in HTML pages
 * This script should be included after variables.js
 */
(function() {
  function replaceVariables() {
    if (!window.EXTENSION_VARIABLES) {
      // eslint-disable-next-line no-console
      console.warn('EXTENSION_VARIABLES not found');
      return;
    }

    const vars = window.EXTENSION_VARIABLES;

    // Replace extension name
    document.querySelectorAll('[data-var="extensionName"]').forEach(el => {
      el.textContent = vars.name;
    });

    // Replace extension name in title tag
    if (document.title) {
      document.title = document.title.replace(/N-M to Ft-Lb Converter|nm to ft-lb Converter|Barcode Pro/gi, vars.name);
    }

    // Replace extension version
    document.querySelectorAll('[data-var="extensionVersion"]').forEach(el => {
      el.textContent = vars.version;
    });

    // Replace Google Form URL in iframe src
    document.querySelectorAll('[data-var="googleFormUrl"]').forEach(el => {
      el.src = vars.googleFormUrl;
    });

    // Replace Google Form URL in href attributes
    document.querySelectorAll('[data-var-href="googleFormUrl"]').forEach(el => {
      el.href = vars.googleFormUrl;
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', replaceVariables);
  } else {
    replaceVariables();
  }
})();

