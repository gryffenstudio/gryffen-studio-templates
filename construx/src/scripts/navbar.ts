// Event listener for menu toggle button
document.getElementById('menu-toggle')?.addEventListener('click', function () {
    let menu = document.getElementById('menu');
    let menuToggle = document.getElementById('menu-toggle');
    let menuToggleElement = document.getElementById('menu-toggle-element');

    // Toggle menu visibility
    menuToggleElement?.classList.toggle('duration-200', false);
    menu?.classList.toggle('translate-x-full');
    menu?.classList.toggle('invisible');
    menuToggle?.classList.toggle('hamburger-toggle');
});
