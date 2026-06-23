(function () {
  var burger = document.querySelector('.nav__burger');
  var drawer = document.querySelector('.nav-drawer');
  var brandImg = document.querySelector('.nav__brand img');
  if (!burger || !drawer) return;

  var originalSrc = brandImg ? brandImg.getAttribute('src') : null;
  var mintSrc = originalSrc ? originalSrc.replace(/[^/]*$/, '') + 'The_garden_footer.svg' : null;

  function openNav() {
    document.body.classList.add('nav-open');
    burger.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    if (brandImg && mintSrc) brandImg.setAttribute('src', mintSrc);
  }
  function closeNav() {
    document.body.classList.remove('nav-open');
    burger.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    if (brandImg && originalSrc) brandImg.setAttribute('src', originalSrc);
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
