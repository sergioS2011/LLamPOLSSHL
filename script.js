document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');

    // Toggle menu visibility on logo click
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Toggle menu visibility on menu icon click
    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});