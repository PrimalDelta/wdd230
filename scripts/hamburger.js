document.addEventListener('DOMContentLoaded', (event) => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    function toggleMenu() {
        nav.classList.toggle('open');
        let icon = hamburger.textContent === '☰' ? '✖' : '☰';
        hamburger.textContent = icon;
    }

    hamburger.addEventListener('click', toggleMenu);
});