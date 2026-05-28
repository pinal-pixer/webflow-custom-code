/*

Add the attribute [data-utm-form] to the <form> element.
<form> should have hidden input fields with names : utm_source,utm_medium,utm_campaign,utm_term,utm_content

*/

// UTM Capture for Forms
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('[data-utm-form]');

    if (!form) return;

    const params = new URLSearchParams(window.location.search);

    const utmFields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

    utmFields.forEach((field) => {
      const paramValue = params.get(field);

      if (paramValue) {
        sessionStorage.setItem(field, paramValue);
      }

      const storedValue = sessionStorage.getItem(field);

      const input = form.querySelector(`[name="${field}"]`);

      if (input && storedValue) {
        input.value = storedValue;
      }
    });
  });
