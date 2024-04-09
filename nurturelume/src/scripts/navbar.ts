let menu = document.getElementById('menu');
let menuToggle = document.getElementById('menu-toggle');
// Event listener for menu toggle button
document.getElementById('menu-toggle')?.addEventListener('click', function () {
    // Toggle menu visibility
    menu?.classList.toggle('translate-x-full');
    menu?.classList.toggle('invisible');
    menuToggle?.classList.toggle('hamburger-toggle');
});
