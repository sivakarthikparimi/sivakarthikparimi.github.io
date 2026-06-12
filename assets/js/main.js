/* Siva Karthik Parimi — site interactions (vanilla, no deps) */
(function () {
  "use strict";

  // --- Year ---
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Nav shadow on scroll ---
  var nav = document.getElementById("nav");
  function onScroll() {
    if (window.scrollY > 12) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // --- Mobile menu ---
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // --- Scroll reveal ---
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // --- Google Scholar placeholder guard ---
  // Replace SCHOLAR_URL below once the profile link is known.
  var SCHOLAR_URL = "";
  if (SCHOLAR_URL) {
    document.querySelectorAll("[data-scholar]").forEach(function (a) {
      a.setAttribute("href", SCHOLAR_URL);
    });
  } else {
    document.querySelectorAll("[data-scholar]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "mailto:sivakarthik.parimi@gmail.com";
      });
    });
  }
})();
