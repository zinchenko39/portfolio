window.addEventListener('DOMContentLoaded', () => {
  // Hamburger
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  const close = document.querySelector('.menu__close');

  hamburger.addEventListener('click', () => {
    menu.classList.add('active');
  });
  close.addEventListener('click', () => {
    menu.classList.remove('active');
  });
}); // ---> DOMContentLoaded
