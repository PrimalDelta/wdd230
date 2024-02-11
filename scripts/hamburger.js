document.addEventListener('DOMContentLoaded', function() {
    // Select the hamburger icon
    const hamburger = document.querySelector('.hamburger');
    // Select the nav element
    const nav = document.querySelector('nav');

    // Add click event listener to the hamburger icon
    hamburger.addEventListener('click', function() {
      // Toggle the 'open' class on the nav element
      nav.classList.toggle('open');
    });
  });