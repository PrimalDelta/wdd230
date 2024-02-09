document.addEventListener('DOMContentLoaded', (event) => {
    // Get the hamburger icon and the menu list
    const hamburgerIcon = document.querySelector('.hamburger');
    const menuList = document.querySelector('nav ul');
    
    // Function to toggle the menu open/close
    function toggleMenu() {
        menuList.classList.toggle('open');
        // Toggle the icon between hamburger and 'X'
        if (menuList.classList.contains('open')) {
            hamburgerIcon.textContent = '✕'; // 'X' symbol
        } else {
            hamburgerIcon.textContent = '☰'; // Hamburger symbol
        }
    }
    
    // Add click event to the hamburger icon
    hamburgerIcon.addEventListener('click', toggleMenu);
});
