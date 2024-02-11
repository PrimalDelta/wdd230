document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.querySelector('.hamburger');
  var nav = document.querySelector('nav');
  
  menuToggle.addEventListener('click', function() {
      nav.classList.toggle('open');
  });
});