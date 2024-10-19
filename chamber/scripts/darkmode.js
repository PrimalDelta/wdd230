// darkmode.js
document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
  
    darkModeToggle.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode');
  
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    });
  
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      darkModeToggle.checked = true;
    }
  });
  