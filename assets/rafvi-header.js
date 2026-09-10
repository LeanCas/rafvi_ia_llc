(function () {
  var toggle = document.querySelector('[data-rafvi-menu-toggle]');
  var panel = document.querySelector('[data-rafvi-menu-panel]');
  var header = document.querySelector('[data-rafvi-header]');
  if (!toggle || !panel) return;

  toggle.addEventListener('click', function () {
    var isOpen = panel.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.classList.toggle('rafvi-menu-open', isOpen);
  });

  panel.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      panel.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('rafvi-menu-open');
    });
  });

  if (!header) return;
  var lastScroll = window.scrollY;
  window.addEventListener(
    'scroll',
    function () {
      var current = window.scrollY;
      header.classList.toggle('is-scrolled', current > 8);
      lastScroll = current;
    },
    { passive: true }
  );
})();
