/* Praxis Osswald – progressive enhancement only. Site works without JS. */
(function () {
  "use strict";

  /* Mobile navigation toggle */
  var nav = document.querySelector(".site-nav");
  var toggle = document.querySelector(".nav-toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    /* close menu when a link is tapped */
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Entrance animation is handled purely in CSS (.js .reveal) so that
     content is always visible even if scripts fail to run. */

  /* Contact form – client-side validation + friendly confirmation.
     Replace the handler with a real endpoint (e.g. Formspree) on deploy. */
  var form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (!form.reportValidity()) return;
      var status = form.querySelector(".form__status");
      form.reset();
      if (status) {
        status.textContent =
          "Vielen Dank für Ihre Nachricht. Wir melden uns schnellstmöglich bei Ihnen.";
        status.classList.add("is-visible");
        status.focus();
      }
    });
  }

  /* Footer year */
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = String(new Date().getFullYear());
})();
