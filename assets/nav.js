(function () {
  var burger = document.querySelector('.nav__burger');
  var drawer = document.querySelector('.nav-drawer');
  if (!burger || !drawer) return;

  function openNav() {
    document.body.classList.add('nav-open');
    burger.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
  }
  function closeNav() {
    document.body.classList.remove('nav-open');
    burger.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
  }

  burger.addEventListener('click', function () {
    document.body.classList.contains('nav-open') ? closeNav() : openNav();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  drawer.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });
})();
