document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.querySelector('.hamburger');
  var navUL = document.querySelector('nav ul');

  hamburger.addEventListener('click', function () {
    navUL.classList.toggle('active');
  });
});