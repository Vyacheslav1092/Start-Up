document.addEventListener('DOMContentLoaded', function () {
  const year = document.getElementById('year');
  const data = new Date().getFullYear();

  year.textContent = data;

  const burger = document.getElementById('burger');
  const burgerMenu = document.querySelector('.header-nav');
  const burgerMenuLinks = document.querySelectorAll(
    '.header-nav-list-item__link'
  );
  const html = document.querySelector('html');

  burger.addEventListener('click', function () {
    burger.classList.toggle('--active');
    burgerMenu.classList.toggle('visible');
    burger.classList.contains('--active')
      ? (html.style.overflow = 'hidden')
      : (html.style.overflow = 'visible');
  });

  burgerMenuLinks.forEach((link) => {
    link.addEventListener('click', function () {
      burger.classList.remove('--active');
      burgerMenu.classList.remove('visible');
      html.style.overflow = 'visible';
    });
  });

  burgerMenu.addEventListener('click', function () {
    burger.classList.remove('--active');
    burgerMenu.classList.remove('visible');
    html.style.overflow = 'visible';
  });
});
